class User < ApplicationRecord
  validates :email, :password_digest, :session_token, :first_name, :last_name, presence: true
  validates :email, :session_token, uniqueness: { message: "has been taken, please try another" }
  validates :password, length: { minimum: 6 }, allow_nil: true

  attr_reader :password
  after_initialize :ensure_session_token

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)    
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.is_password?(password)
    user
  end

  def reset_session_token!
    self.update!(session_token: User.generate_session_token)
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

end