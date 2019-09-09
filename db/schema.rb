# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_08_19_184111) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.text "comment", null: false
    t.integer "start_index", null: false
    t.integer "end_index", null: false
    t.integer "user_id", null: false
    t.integer "doc_id", null: false
    t.integer "parent_id"
    t.boolean "resolved", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["doc_id"], name: "index_comments_on_doc_id"
    t.index ["parent_id"], name: "index_comments_on_parent_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "documents", force: :cascade do |t|
    t.string "title", default: "Untitled document", null: false
    t.text "content", default: ""
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title"], name: "index_documents_on_title"
    t.index ["user_id"], name: "index_documents_on_user_id"
  end

  create_table "permissions", force: :cascade do |t|
    t.integer "doc_id", null: false
    t.integer "user_id", null: false
    t.string "permission_type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["doc_id", "user_id"], name: "index_permissions_on_doc_id_and_user_id", unique: true
    t.index ["doc_id"], name: "index_permissions_on_doc_id"
    t.index ["user_id"], name: "index_permissions_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.index ["email"], name: "index_users_on_email"
    t.index ["session_token"], name: "index_users_on_session_token"
  end

end
