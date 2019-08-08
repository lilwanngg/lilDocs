import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateDocument } from '../../actions/document_actions'
import { createPermission, fetchPermissions } from '../../actions/permission_actions'

class NewDocBar extends React.Component {
    constructor(props) {
        super(props)
        this.createDoc = this.createDoc.bind(this)
        this.temp1 = "<p class=\"ql-align-right\"><span style=\"background-color: transparent;\">123 Your Street</span></p><p class=\"ql-align-right\"><span style=\"background-color: transparent;\">Your City, ST 12345</span></p><p class=\"ql-align-right\"><strong style=\"background-color: transparent;\">(123) 456-7890</strong></p><p class=\"ql-align-right\"><strong style=\"background-color: transparent;\">no_reply@example.com</strong></p><p><strong style=\"font-size: 30px; background-color: transparent;\">Your Name</strong></p><p><span style=\"background-color: transparent;\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span></p><p><br></p><h1><strong style=\"font-size: 18px; color: rgb(32, 121, 199); background-color: transparent;\">EXPERIENCE</strong></h1><h2><strong style=\"font-size: 18px; background-color: transparent;\">Company, </strong><span style=\"font-size: 18px; background-color: transparent;\">Location — </span><em style=\"font-size: 18px; background-color: transparent;\">Job Title</em></h2><h3><span style=\"font-size: 12px; color: rgb(102, 102, 102); background-color: transparent;\">MONTH 20XX - PRESENT</span></h3><p><span style=\"font-size: 12px; color: rgb(102, 102, 102); background-color: transparent;\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</span></p><h2><strong style=\"font-size: 18px; background-color: transparent;\">Company, </strong><span style=\"font-size: 18px; background-color: transparent;\">Location — </span><em style=\"font-size: 18px; background-color: transparent;\">Job Title</em></h2><h3><span style=\"font-size: 12px; color: rgb(102, 102, 102); background-color: transparent;\">MONTH 20XX - MONTH 20XX</span></h3><p><span style=\"font-size: 12px; color: rgb(102, 102, 102); background-color: transparent;\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</span></p><p><br></p><h1><strong style=\"font-size: 18px; color: rgb(32, 121, 199); background-color: transparent;\">EDUCATION</strong></h1><h2><strong style=\"font-size: 18px; background-color: transparent;\">School Name, </strong><span style=\"font-size: 18px; background-color: transparent;\">Location — </span><em style=\"font-size: 18px; background-color: transparent;\">Degree</em></h2><h3><span style=\"color: rgb(102, 102, 102); background-color: transparent;\">MONTH 20XX - MONTH 20XX</span></h3><p><span style=\"color: rgb(102, 102, 102); background-color: transparent;\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</span></p><h2><strong style=\"font-size: 18px; background-color: transparent;\">School Name, </strong><span style=\"font-size: 18px; background-color: transparent;\">Location — </span><em style=\"font-size: 18px; background-color: transparent;\">Degree</em></h2><h3><span style=\"color: rgb(102, 102, 102); background-color: transparent;\">MONTH 20XX - MONTH 20XX</span></h3><p><span style=\"color: rgb(102, 102, 102); background-color: transparent;\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</span></p><p><br></p><h1><strong style=\"font-size: 18px; color: rgb(32, 121, 199); background-color: transparent;\">PROJECTS</strong></h1><h2><strong style=\"font-size: 18px; background-color: transparent;\">Project Name </strong><span style=\"font-size: 18px; background-color: transparent;\">— </span><em style=\"font-size: 18px; background-color: transparent;\">Detail</em></h2><p><span style=\"color: rgb(102, 102, 102); background-color: transparent;\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</span></p><h1><strong style=\"font-size: 18px; color: rgb(32, 121, 199); background-color: transparent;\">SKILLS</strong></h1><ul><li><span style=\"background-color: transparent;\">Lorem ipsum dolor sit amet.</span></li><li><span style=\"background-color: transparent;\">Consectetuer adipiscing elit.</span></li><li><span style=\"background-color: transparent;\">Sed diam nonummy nibh euismod tincidunt.</span></li><li><span style=\"background-color: transparent;\">L​​​‌​aoreet dolore magna aliquam erat volutpat.</span></li></ul><p><br></p><h1><strong style=\"font-size: 18px; color: rgb(32, 121, 199); background-color: transparent;\">AWARDS</strong></h1><p><strong style=\"color: rgb(102, 102, 102); background-color: transparent;\">Lorem ipsum</strong><span style=\"color: rgb(102, 102, 102); background-color: transparent;\"> </span><strong style=\"color: rgb(102, 102, 102); background-color: transparent;\">dolor sit</strong><span style=\"color: rgb(102, 102, 102); background-color: transparent;\"> amet Consectetuer adipiscing elit, Sed diam nonummy</span></p><p><strong style=\"color: rgb(102, 102, 102); background-color: transparent;\">Nibh euismod tincidunt</strong><span style=\"color: rgb(102, 102, 102); background-color: transparent;\"> ut laoreet dolore magna aliquam erat volutpat.</span></p><p><strong style=\"color: rgb(102, 102, 102); background-color: transparent;\">Lorem ipsum dolor sit</strong><span style=\"color: rgb(102, 102, 102); background-color: transparent;\"> amet Consectetuer adipiscing elit, Sed diam nonummy</span></p>"
        this.temp2 = "<h1><strong class=\"ql-font-georgia\" style=\"color: rgb(247, 93, 93); background-color: transparent;\">Hello</strong></h1><h2><strong class=\"ql-font-georgia\" style=\"background-color: transparent;\">I’m Your Name</strong></h2><p><span class=\"ql-font-lucida\" style=\"background-color: transparent;\">123 YOUR STREET</span></p><p><span class=\"ql-font-lucida\" style=\"background-color: transparent;\">YOUR CITY, ST 12345</span></p><p><strong class=\"ql-font-lucida\" style=\"background-color: transparent;\">(123) 456-7890</strong></p><p><strong class=\"ql-font-lucida\" style=\"background-color: transparent;\">NO_REPLY@EXAMPLE.COM</strong></p><p><br></p><h1><strong class=\"ql-font-georgia\" style=\"font-size: 24px; color: rgb(247, 93, 93); background-color: transparent;\">Skills</strong></h1><p><span class=\"ql-font-georgia\" style=\"background-color: transparent;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac interdum nisi. Sed in consequat mi. Sed pulvinar lacinia felis eu finibus.</span></p><p><br></p><h1><strong class=\"ql-font-georgia\" style=\"color: rgb(247, 93, 93); background-color: transparent;\">Experience</strong></h1><h2><span class=\"ql-font-georgia\" style=\"color: rgb(102, 102, 102); background-color: transparent; font-size: 14px;\">MONTH 20XX - PRESENT</span></h2><h3><strong class=\"ql-font-georgia\" style=\"background-color: transparent;\">Company Name, Location</strong><em class=\"ql-font-georgia\" style=\"background-color: transparent;\"> - Job Title</em></h3><ul><li><span class=\"ql-font-georgia\" style=\"background-color: transparent;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.&nbsp;</span></li><li><span class=\"ql-font-georgia\" style=\"background-color: transparent;\">Aenean ac interdum nisi. Sed in consequat mi.</span></li><li><span class=\"ql-font-georgia\" style=\"background-color: transparent;\">Sed in consequat mi, sed pulvinar lacinia felis eu finibus.</span></li></ul><p><br></p><h2><span class=\"ql-font-georgia\" style=\"color: rgb(102, 102, 102); background-color: transparent; font-size: 14px;\">MONTH 20XX - MONTH 20XX</span></h2><h3><strong class=\"ql-font-georgia\" style=\"background-color: transparent;\">Company Name, Location</strong><em class=\"ql-font-georgia\" style=\"background-color: transparent;\"> - Job Title</em></h3><ul><li><span class=\"ql-font-georgia\" style=\"background-color: transparent;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.&nbsp;</span></li><li><span class=\"ql-font-georgia\" style=\"background-color: transparent;\">Aenean ac interdum nisi. Sed in consequat mi.&nbsp;</span></li></ul><p><br></p><h2><span class=\"ql-font-georgia\" style=\"color: rgb(102, 102, 102); background-color: transparent; font-size: 14px;\">MONTH 20XX - MONTH 20XX</span></h2><h3><strong class=\"ql-font-georgia\" style=\"background-color: transparent;\">Company Name, Location</strong><em class=\"ql-font-georgia\" style=\"background-color: transparent;\"> - Job Title</em></h3><ul><li><span class=\"ql-font-georgia\" style=\"background-color: transparent;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.&nbsp;</span></li><li><span class=\"ql-font-georgia\" style=\"background-color: transparent;\">Aenean ac interdum nisi. Sed in consequat mi.&nbsp;</span></li><li><span class=\"ql-font-georgia\" style=\"background-color: transparent;\">Sed pulvinar lacinia felis eu finibus.&nbsp;</span></li></ul><p><br></p><h1><strong class=\"ql-font-georgia\" style=\"color: rgb(247, 93, 93); background-color: transparent;\">Education</strong></h1><h2><span class=\"ql-font-georgia\" style=\"color: rgb(102, 102, 102); background-color: transparent; font-size: 14px;\">MONTH&nbsp;20XX - MONTH 20XX</span></h2><h3><strong class=\"ql-font-georgia\" style=\"background-color: transparent;\">College Name, Location</strong><em class=\"ql-font-georgia\" style=\"background-color: transparent;\"> - Degree</em></h3><p><br></p><p><span class=\"ql-font-georgia\" style=\"background-color: transparent;\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</span></p><h1><strong class=\"ql-font-georgia\" style=\"color: rgb(247, 93, 93); background-color: transparent;\">Awards</strong></h1><p><span class=\"ql-font-georgia\" style=\"background-color: transparent;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></p><p><span class=\"ql-font-georgia\" style=\"background-color: transparent;\">Aenean ac interdum nisi.&nbsp;</span></p><p><br></p><h3 class=\"ql-align-right\"><br></h3>"
        this.temp3 = "<p><strong style=\"color: rgb(102, 185, 102);\">___________________________________________________________________________________________________________________________</strong></p><p><strong style=\"color: rgb(102, 185, 102); background-color: rgb(255, 255, 255);\">___________________________________________________________________________________________________________________________</strong></p><p><br></p><p><strong style=\"background-color: transparent; color: rgb(53, 55, 68); font-size: 14px;\">Your Name</strong></p><p><span style=\"background-color: transparent; color: rgb(102, 102, 102); font-size: 14px;\">123 Your Street</span></p><p><span style=\"background-color: transparent; color: rgb(102, 102, 102); font-size: 14px;\">Your City, ST 12345</span></p><p><span style=\"background-color: transparent; color: rgb(102, 102, 102); font-size: 14px;\">(123) 456-7890</span></p><p><span style=\"background-color: transparent; color: rgb(102, 102, 102); font-size: 14px;\">no_reply@example.com</span></p><p><br></p><p><span style=\"background-color: transparent; color: rgb(53, 55, 68); font-size: 14px;\">4th September 20XX</span></p><p><strong style=\"background-color: transparent; color: rgb(53, 55, 68); font-size: 14px;\">Ronny Reader</strong></p><p><span style=\"background-color: transparent; color: rgb(53, 55, 68); font-size: 14px;\">CEO, Company Name</span></p><p><span style=\"background-color: transparent; color: rgb(53, 55, 68); font-size: 14px;\">123 Address St&nbsp;</span></p><p><span style=\"background-color: transparent; color: rgb(53, 55, 68); font-size: 14px;\">Anytown, ST 12345</span></p><p><br></p><p><br></p><p><br></p><p><br></p><p><span style=\"background-color: transparent; color: rgb(53, 55, 68); font-size: 14px;\">Dear Ms. Reader,</span></p><p><br></p><p><span style=\"background-color: transparent; color: rgb(53, 55, 68); font-size: 14px;\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</span></p><p><br></p><p><span style=\"background-color: transparent; color: rgb(53, 55, 68); font-size: 14px;\">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.</span></p><p><br></p><p><span style=\"background-color: transparent; color: rgb(53, 55, 68); font-size: 14px;\">Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.</span></p><p><br></p><p><span style=\"background-color: transparent; color: rgb(53, 55, 68); font-size: 14px;\">﻿</span></p><p><br></p><p><span style=\"background-color: transparent; color: rgb(53, 55, 68); font-size: 18px;\">Sincerely,</span></p><p><br></p><p><br></p><p><br></p><p><strong style=\"background-color: transparent; color: rgb(0, 171, 68); font-size: 24px;\">Your Name</strong></p>"
        this.temp4 = "<h2><strong style=\"background-color: transparent; color: rgb(255, 194, 102);\">Team Meeting</strong></h2><p><strong style=\"background-color: transparent;\">04 SEPTEMBER 20XX </strong><span style=\"background-color: transparent;\">/ 10:00 AM / CONFERENCE ROOM</span></p><p><br></p><h1><strong style=\"background-color: transparent; color: rgb(255, 194, 102); font-size: 24px;\">Attendees&nbsp;</strong></h1><p><span style=\"background-color: transparent; color: rgb(102, 102, 102);\">Wendy Writer, Ronny Reader, Abby Author</span></p><p><br></p><p><br></p><p><br></p><h1><strong style=\"background-color: transparent; color: rgb(255, 194, 102);\">Agenda</strong></h1><h2><strong style=\"background-color: transparent;\">Last Meeting Follow-up</strong></h2><p><br></p><ol><li><span style=\"background-color: transparent; font-size: 14px;\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.&nbsp;</span></li><li><strong style=\"background-color: transparent; font-size: 14px;\">Vestibulum ante ipsum primis elementum</strong><span style=\"background-color: transparent; font-size: 14px;\">, libero interdum auctor cursus, sapien enim dictum quam.</span></li><li><span style=\"background-color: transparent; font-size: 14px;\">Suspendisse scelerisque mi a mi</span></li></ol><p><br></p><p><br></p><h2><strong style=\"background-color: transparent; color: rgb(255, 194, 102); font-size: 18px;\">New Business</strong></h2><ol><li><span style=\"background-color: transparent; font-size: 14px;\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.&nbsp;</span></li><li><span style=\"background-color: transparent; font-size: 14px;\">Suspendisse scelerisque mi a mi.&nbsp;</span></li></ol><p><br></p><h1><strong style=\"background-color: transparent; color: rgb(255, 194, 102); font-size: 18px;\">Notes</strong></h1><ul><li><strong style=\"background-color: transparent; color: rgb(0, 0, 0); font-size: 14px;\">Lorem ipsum dolor sit amet</strong><span style=\"background-color: transparent; font-size: 14px;\"> consectetuer adipiscing elit.&nbsp;</span></li><li><span style=\"background-color: transparent; font-size: 14px;\">Suspendisse scelerisque mi a mi.&nbsp;</span></li><li><strong style=\"background-color: transparent; color: rgb(0, 0, 0); font-size: 14px;\">Vestibulum ante ipsum primis elementum</strong><span style=\"background-color: transparent; font-size: 14px;\">, libero interdum auctor cursus, sapien enim dictum quam.</span></li><li class=\"ql-indent-1\"><span style=\"background-color: transparent; font-size: 14px;\">Phasellus vehicula nonummy nunc.&nbsp;</span></li></ul><p><br></p><h1><strong style=\"background-color: transparent; color: rgb(255, 194, 102); font-size: 18px;\">Action Items</strong></h1><ol><li><span style=\"background-color: transparent; font-size: 14px;\">Lorem ipsum dolor sit amet consectetuer adipiscing elit.&nbsp;</span></li><li><span style=\"background-color: transparent; font-size: 14px;\">Suspendisse scelerisque mi a mi</span></li></ol><p><br></p><h1><strong style=\"background-color: transparent; color: rgb(255, 194, 102); font-size: 18px;\">Next Meeting Agenda</strong></h1><p><span style=\"background-color: transparent; color: rgb(102, 102, 102);\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</span></p><p><br></p><p><br></p>"
        this.temp5 = "<p class=\"ql-align-center\"><span class=\"ql-font-georgia\" style=\"background-color: transparent;\"><img src=\"https://lh6.googleusercontent.com/T8GMuPP4vIumig-rcfIdkpVv4uFl095dgklwgFm2G5VXCLhL9Q4EWVi7ysIQiEKA4Gu9qlMvhUdNvJRZTb8yvYaumc90smTsiFFcl9MCJBD7Te1bXxDHixg8wE9h7Fl6kNl2-tnZ\" height=\"67\" width=\"71\"></span></p><p class=\"ql-align-center\"><strong class=\"ql-font-georgia\" style=\"color: rgb(102, 102, 102); background-color: transparent;\">HeartWorks </strong><span class=\"ql-font-georgia\" style=\"color: rgb(102, 102, 102); background-color: transparent;\">Weekly Digest</span></p><p class=\"ql-align-center\"><span class=\"ql-font-georgia\" style=\"background-color: transparent;\"><img src=\"https://lh3.googleusercontent.com/SL07CWvQlvRPRy8lOiPX3GFZg90OjlpHHHDwjh6wTx8-mpKxO8WBgzC1niuDNBD9fpSokgALyGm7ZIB2unmNdew6_mA1KCs7703EeTL5Pd4Ab422mkDxNl8TZYuMb56Wf_uHl_PI\" height=\"3\" width=\"80\"></span></p><h1 class=\"ql-align-center\"><span class=\"ql-font-georgia\" style=\"background-color: transparent;\">We have a surprise!</span></h1><p class=\"ql-align-center\"><span class=\"ql-font-georgia\" style=\"color: rgb(102, 102, 102); background-color: transparent;\">Lorem ipsum dolor sit amet, consectetuer adipiscing.</span></p><p class=\"ql-align-center\"><br></p><p><img src=\"https://lh4.googleusercontent.com/L7zay05yuapYL1hprGNM5k7XYMHRdODktqQHtruCxsf8ir_xSWdu-F1Pk2CmZMDOH97yz1rkRfOwyfhLpaThCfnDoUmXMstUX6vLhZnGGvF0ikIJcFnHAutacoJk4BODud3W8F3Y\" height=\"231\" width=\"623\"></p><p><br></p><p><br></p><p><span class=\"ql-font-georgia\" style=\"color: rgb(102, 102, 102); background-color: transparent;\">by </span><span class=\"ql-font-georgia\" style=\"color: rgb(238, 0, 0); background-color: transparent;\">Your Name</span><span class=\"ql-font-georgia\" style=\"color: rgb(102, 102, 102); background-color: transparent;\"> on September 04</span></p><p><br></p><p><span class=\"ql-font-georgia\" style=\"background-color: transparent;\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</span></p><p><span class=\"ql-font-georgia\" style=\"background-color: transparent;\">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.</span></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p class=\"ql-align-center\"><span class=\"ql-font-georgia\" style=\"background-color: transparent;\"><img src=\"https://lh6.googleusercontent.com/xenQlY1FEfs-GBRhfR47NENDI9guvVIVuV-M8E_Tk0EBWWWILvjS9Ss9QJE6pQdxShDeN-lJm5-HR5CFmvgCQ0-ftJLlRozGAAbF1ZXR2sWNxcavAPZlBnWEcN0aqHqMNnXimCUf\" height=\"3\" width=\"662\"></span></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><span class=\"ql-font-georgia\" style=\"color: rgb(102, 102, 102); background-color: transparent;\">THIS WEEK’S</span></p><p class=\"ql-align-center\"><strong class=\"ql-font-georgia\" style=\"color: rgb(102, 102, 102); background-color: transparent;\">TOP STORIES</strong></p><p><br></p><h2><br></h2><h2><br></h2><p><span class=\"ql-font-georgia\" style=\"background-color: transparent;\">Lorem ipsum dolor sit amet</span></p><p><span class=\"ql-font-georgia\" style=\"color: rgb(102, 102, 102); background-color: transparent;\">by </span><span class=\"ql-font-georgia\" style=\"color: rgb(238, 0, 0); background-color: transparent;\">Your Name</span><span class=\"ql-font-georgia\" style=\"color: rgb(102, 102, 102); background-color: transparent;\"> on September 04</span></p><p><span class=\"ql-font-georgia\" style=\"background-color: transparent;\">Nam liber tempor cum soluta nobis elei</span><img src=\"https://lh4.googleusercontent.com/iqYRE3ttAY1WB9vSSShQX26PiXo4KIpWIG9dKgSFXlfzVUm4Alfe_hWxrC19rqb2KxWdhLltBUc8Akohjui7_VfA9fsSDCwkjJAW3jk4YmvJ3mJRa9mLDwfYQShx33xMO_g58yaG\" height=\"389\" width=\"622\"><span style=\"background-color: transparent;\">fend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</span></p><p><br></p><h2><br></h2><h2><span class=\"ql-font-georgia\" style=\"background-color: transparent;\">Duis autem vel eum iriure dolor</span></h2><p><span class=\"ql-font-georgia\" style=\"color: rgb(102, 102, 102); background-color: transparent;\">by </span><span class=\"ql-font-georgia\" style=\"color: rgb(238, 0, 0); background-color: transparent;\">Your Name</span><span class=\"ql-font-georgia\" style=\"color: rgb(102, 102, 102); background-color: transparent;\"> on September 04</span></p><p><span class=\"ql-font-georgia\" style=\"background-color: transparent;\">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.</span></p><p><br></p><p class=\"ql-align-center\"><a href=\"http://www.google.com/\" target=\"_blank\" class=\"ql-font-georgia\" style=\"color: rgb(255, 255, 255); background-color: transparent;\"><strong>READ MORE ON OUR WEBSITE&nbsp;</strong></a></p><p><br></p><p><span class=\"ql-font-georgia\" style=\"background-color: transparent;\"><img src=\"https://lh6.googleusercontent.com/xenQlY1FEfs-GBRhfR47NENDI9guvVIVuV-M8E_Tk0EBWWWILvjS9Ss9QJE6pQdxShDeN-lJm5-HR5CFmvgCQ0-ftJLlRozGAAbF1ZXR2sWNxcavAPZlBnWEcN0aqHqMNnXimCUf\" height=\"3\" width=\"662\"></span></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><span class=\"ql-font-georgia\" style=\"color: rgb(102, 102, 102); background-color: transparent;\"><img src=\"https://lh6.googleusercontent.com/T8GMuPP4vIumig-rcfIdkpVv4uFl095dgklwgFm2G5VXCLhL9Q4EWVi7ysIQiEKA4Gu9qlMvhUdNvJRZTb8yvYaumc90smTsiFFcl9MCJBD7Te1bXxDHixg8wE9h7Fl6kNl2-tnZ\" height=\"58\" width=\"58\">&nbsp;</span></p><p class=\"ql-align-center\"><span class=\"ql-font-georgia\" style=\"background-color: transparent;\">HeartWorks Inc.</span></p><p class=\"ql-align-center\"><span class=\"ql-font-georgia\" style=\"background-color: transparent;\">115, SomeCity, PA, 55344</span></p>"
        this.temp6 = "<p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p class=\"ql-align-center\"><span style=\"background-color: transparent;\" class=\"ql-font-roboto\"><img src=\"https://lh3.googleusercontent.com/sXHP-Dy043sSN0GvPiIJjF_3IZtrttk7Qo0HDkFgXguAijKQC3lIgfYwWA37P6ug7HaCP1vaPkBDtiXTGmoewM06DUAqkl6wEjHipO-ndNkdtWSPvgU6emKqGrheHN6PW93OTaD8\" height=\"115\" width=\"117\"></span></p><p><br></p><p class=\"ql-align-center\"><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">Consulting Agreement</span></p><p class=\"ql-align-center\"><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">Template</span></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p class=\"ql-align-center\"><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">Prepared for [Client company]</span></p><p class=\"ql-align-center\"><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">Created by [Consultant company]</span></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><br></p><p><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">[Company]</span></p><p><br></p><p><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">This Consulting Agreement (the “Agreement” or “Consulting Agreement”) states the terms and conditions that govern the contractual agreement between&nbsp;[Company]&nbsp;having its principal place of business at&nbsp;[Company address]&nbsp;(the “Consultant”), and&nbsp;[Client company]&nbsp;(the “Client”) who agrees to be bound by this Agreement.</span></p><p><br></p><p><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">WHEREAS, the Consultant offers consulting services in the field of&nbsp;[Consulting field]; and</span></p><p><br></p><p><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">WHEREAS, the Client desires to retain the services of the Consultant to render consulting services with regard to&nbsp;[Scope of consulting services]&nbsp;according to the terms and conditions herein.</span></p><p><br></p><p><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">NOW, THEREFORE, In consideration of the mutual covenants and promises made by the parties hereto, the Consultant and the Client (individually, each a “Party” and collectively, the “Parties”) covenant and agree as follows:</span></p><p><br></p><h1><strong style=\"background-color: transparent; color: rgb(234, 181, 115);\" class=\"ql-font-roboto\">1. Term</strong></h1><p><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">This Agreement shall begin on [Begin date] and continue for [time period].</span></p><ol><li><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">Either Party may terminate this Agreement for any reason with [Days written notice] days written notice to the other Party.</span></li></ol><p><br></p><h1><strong style=\"background-color: transparent; color: rgb(234, 181, 115);\" class=\"ql-font-roboto\">2. Consulting Services&nbsp;</strong></h1><p><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">The Consultant agrees that it shall provide its expertise to the Client for all things pertaining to [Scope of consulting services] (the Consulting Services).</span></p><p><br></p><h1><strong style=\"background-color: transparent; color: rgb(234, 181, 115);\" class=\"ql-font-roboto\">3. Compensation</strong></h1><p><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">In consideration for the Consulting Services, the Client shall pay the Consultant at the rate of $[Rate] per hour. The Consultant shall invoice the Client once every [Invoice time frame] and such invoices shall be due and payable within [Invoices payable within time frame] days of the Client’s receipt of the invoice.</span></p><p><br></p><h1><strong style=\"background-color: transparent; color: rgb(234, 181, 115);\" class=\"ql-font-roboto\">4. Intellectual Property Rights in Work Product</strong></h1><p><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">The Parties acknowledge and agree that the Client will hold all intellectual property rights in any work product resulting from the Consulting Services including, but not limited to, copyright and trademark rights. The Consultant agrees not to claim any such ownership in such work products intellectual property at any time prior to or after the completion and delivery of such work product to the Client.</span></p><p><br></p><h1><strong style=\"background-color: transparent; color: rgb(234, 181, 115);\" class=\"ql-font-roboto\">5. Confidentiality</strong></h1><p><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">The Consultant shall not disclose to any third party any details regarding the Client’s business, including, without limitation any information regarding any of the Client’s customer information, business plans, or price points (the Confidential Information), (ii) make copies of any Confidential Information or any content based on the concepts contained within the Confidential Information for personal use or for distribution unless requested to do so by the Client, or (iii) use Confidential Information other than solely for the benefit of the Client.</span></p><p><br></p><h1><strong style=\"background-color: transparent; color: rgb(234, 181, 115);\" class=\"ql-font-roboto\">6. Noncompetition</strong></h1><p><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">During the term of this Agreement and for [Number months for noncompetition] months thereafter, the Consultant shall not engage, directly or indirectly, as an employee, officer, manager, partner, manager, consultant, agent, owner or in any other capacity, in any competition with the Client or any of its subsidiaries, including any company engaged in [Type of business].</span></p><p><br></p><h1><strong style=\"background-color: transparent; color: rgb(234, 181, 115);\" class=\"ql-font-roboto\">7. Nonsolicitation of Customers</strong></h1><p><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">During the term of this Agreement and for [Number months for customers] months thereafter, the Consultant will not, directly or indirectly, solicit or attempt to solicit any business from any of the Company’s clients, prospects, employees or contractors.</span></p><p><br></p><h1><strong style=\"background-color: transparent; color: rgb(234, 181, 115);\" class=\"ql-font-roboto\">8. Nonsolicitation of Employees</strong></h1><p><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">During the term of this Agreement and for [Number months for employees] months thereafter, the Consultant will not, directly or indirectly, recruit, solicit, or induce, or attempt to recruit, solicit, or induce, any of the Company’s employees, or contractors for work at another company.</span></p><p><br></p><h1><strong style=\"background-color: transparent; color: rgb(234, 181, 115);\" class=\"ql-font-roboto\">9. Indemnification</strong></h1><p><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">The Client agrees to indemnify, defend, and protect the Consultant from and against all lawsuits and costs of every kind pertaining to the Client’s business including reasonable legal fees due to any act or failure to act by the Client based upon the Consulting Services.</span></p><p><br></p><h1><strong style=\"background-color: transparent; color: rgb(234, 181, 115);\" class=\"ql-font-roboto\">10. No&nbsp;Modification Unless in Writing</strong></h1><p><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">No modification of this Agreement shall be valid unless in writing and agreed upon by both Parties.</span></p><p><br></p><h1><strong style=\"background-color: transparent; color: rgb(234, 181, 115);\" class=\"ql-font-roboto\">11. Applicable Law</strong></h1><p><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">This Consulting Agreement and the interpretation of its terms shall be governed by and construed in accordance with the laws of the State of&nbsp;[State]&nbsp;and subject to the exclusive jurisdiction of the federal and state courts located in&nbsp;[County],&nbsp;[State].</span></p><p><br></p><p><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">IN WITNESS WHEREOF, each of the Parties has executed this Consulting Agreement, both Parties by its duly authorized officer, as of the day and year set forth below.</span></p><p><br></p><p><br></p><p><strong style=\"background-color: transparent;\" class=\"ql-font-roboto\">[Company]</strong></p><p><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">__________________________</span></p><p><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">[First name]</span></p><p><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">__________________________</span></p><p><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">[Last name]</span></p><p><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">__________________________</span></p><p><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">[Title]</span></p><p><br></p><p><br></p><p><strong style=\"background-color: transparent;\" class=\"ql-font-roboto\">[Client]</strong></p><p><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">__________________________</span></p><p><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">[First name]</span></p><p><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">__________________________</span></p><p><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">[Last name]</span></p><p><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">__________________________</span></p><p><span style=\"background-color: transparent;\" class=\"ql-font-roboto\">[Title]</span></p><p><br></p>"
    }

    componentDidMount() {
        this.props.fetchPermissions()
    }

    createDoc(body) {
        const { user, createDocument, updateDocument, createPermission } = this.props
        if (body !== "") {
            createDocument()
            .then( (res) => createPermission({ user_id: user.id, doc_id: res.document.id, permission_type: "edit" }))
            .then( (res2) => updateDocument({ id: res2.permission.doc_id, title: "Untitled document", content: body}))
            .then( (res3) => {this.props.history.push(`/documents/${res3.document.id}`)
            })
        } else {
            createDocument()
                .then( (res) => createPermission({user_id: user.id, doc_id: res.document.id, permission_type: "edit"})
                .then( (res2) => this.props.history.push(`/documents/${res2.document.doc_id}`)))
        }
    }

    render() {
        return (
            <div className="temp-wrapper">

                <ul className="temps">
                    <div className="start">
                        Start a new document
                    </div>
                    <div className="docs">
                        <div className="eachdoc">
                            <div className="docpic" onClick={() => this.createDoc("")}>
                                <img src={window.blankURL} />
                            </div>
                            <div className="docdesc">
                                <p>Blank</p>
                            </div>
                        </div>
                        <div className="eachdoc">
                            <div className="docpic" onClick={() => this.createDoc(this.temp6)}>
                                <img src={window.t6URL} />
                            </div>
                            <div className="docdesc">
                                <p>Contract</p>
                                <p>Luxe</p>
                            </div>
                        </div>
                        <div className="eachdoc">
                            <div className="docpic" onClick={() => this.createDoc(this.temp1)}>
                                <img src={window.t1URL} />
                            </div>
                            <div className="docdesc">
                                <p>Resume</p>
                                <p>Tropic</p>
                            </div>
                        </div>
                        <div className="eachdoc">
                            <div className="docpic" onClick={() => this.createDoc(this.temp2)}>
                                <img src={window.t2URL} />
                            </div>
                            <div className="docdesc">
                                <p>Resume</p>
                                <p>Coral</p>
                            </div>
                        </div>
                        <div className="eachdoc">
                            <div className="docpic" onClick={() => this.createDoc(this.temp5)}>
                                <img src={window.t5URL} />
                            </div>
                            <div className="docdesc">
                                <p>Newsletter</p>
                                <p>Lively</p>
                            </div>
                        </div>
                        <div className="eachdoc">
                            <div className="docpic" onClick={() => this.createDoc(this.temp3)}>
                                <img src={window.t3URL} />
                            </div>
                            <div className="docdesc">
                                <p>Letter</p>
                                <p>Forest</p>
                            </div>
                        </div>
                        <div className="eachdoc">
                            <div className="docpic" onClick={() => this.createDoc(this.temp4)}>
                                <img src={window.t4URL} />
                            </div>
                            <div className="docdesc">
                                <p>Meeting Notes</p>
                                <p>Chartreuse</p>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        )
    }
}

const msp = (state, ownProps) => {
    return {
        user: state.entities.users[state.session.id],
    };
};

const mdp = dispatch => ({
    updateDocument: doc => dispatch(updateDocument(doc)),
    createPermission: permission => dispatch(createPermission(permission)),
    fetchPermissions: permissions => dispatch(fetchPermissions(permissions))
})

export default withRouter(connect(msp, mdp)(NewDocBar))