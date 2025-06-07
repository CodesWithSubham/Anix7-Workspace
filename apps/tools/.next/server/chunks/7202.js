exports.id=7202,exports.ids=[7202],exports.modules={3600:(e,t,r)=>{"use strict";e.exports=r(48952).vendored["react-rsc"].ReactJsxRuntime},9913:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var i=r(56037);let o=process.env.MONGODB_URI,a=process.env.MONGODB_NAME;if(!o)throw Error("❌ MONGODB_URI is not defined in environment variables.");let s=global.mongoose||{conn:null,promise:null},n=async()=>(s.conn||(s.promise||(console.log("\uD83D\uDD04 Connecting to MongoDB..."),s.promise=i.connect(o,{dbName:a,maxPoolSize:10,serverSelectionTimeoutMS:8e3,socketTimeoutMS:45e3,retryWrites:!0,waitQueueTimeoutMS:5e3,bufferCommands:!1}).then(e=>(console.log("✅ Connected to MongoDB!"),e)).catch(e=>{throw console.error("❌ MongoDB Connection Error:",e),Error("MongoDB connection failed.")})),s.conn=await s.promise),s.conn);global.mongoose=s;let l=n},12056:(e,t,r)=>{"use strict";r.d(t,{v:()=>o});var i=r(3600);function o({userName:e,userEmail:t,otp:r,profilePicLink:o}){let a=process.env.BASE_URL,s=process.env.CONTACT_EMAIL;return(0,i.jsx)(i.Fragment,{children:`<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Verify your email address</title>
        </head>
        <body>
          <table cellpadding="0" cellspacing="0" border="0" style="min-width: 348px" height="100%" width="100%">
            <tbody>
              <tr height="32px"></tr>
              <tr align="center">
                <td>
                  <table
                    style="padding-bottom: 20px; max-width: 600px; min-width: 220px"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table cellspacing="0" cellpadding="0">
                            <tbody>
                              <tr>
                                <td>
                                  <br />
                                </td>
                                <td>
                                  <table
                                    style="direction: ltr; padding-bottom: 7px"
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr>
                                        <td align="left" width="37">
                                          <img
                                            src="${a}/assets/img/logo.png"
                                            style="width: 35px; height: 35px"
                                            height="35"
                                            width="35"
                                          />
                                          <br />
                                        </td>
                                        

                                        <td
                                          style="
                                      font-family: Roboto-Light, Helvetica,
                                        Arial, sans-serif;
                                    "
                                          align="left"
                                        >
                                          Tools - Anix7
                                          <br />
                                        </td>
                                        <td
                                          style="
                                      font-family: Roboto-Light, Helvetica,
                                        Arial, sans-serif;
                                    "
                                          align="right"
                                        >${e}
                                          <br />
                                        </td>
                                        <td width="35" align="right">
                                          <img
                                            src="${o}"
                                            style="width: 32px; height: 32px"
                                            height="32"
                                            width="32"
                                          />
                                          <br />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                                <td>
                                  <br />
                                </td>
                              </tr>
                              <tr>
                                <td
                                  height="5"
                                  width="6"
                                  style="
                              background: url('https://www.gstatic.com/accountalerts/email/hodor/4-corner-nw.png')
                                left top no-repeat;
                            "
                                >
                                  <div>
                                    <br />
                                  </div>
                                </td>
                                <td
                                  height="5"
                                  style="
                              background: url('https://www.gstatic.com/accountalerts/email/hodor/4-pixel-n.png')
                                center top repeat-x;
                            "
                                >
                                  <div>
                                    <br />
                                  </div>
                                </td>
                                <td
                                  height="5"
                                  width="6"
                                  style="
                              background: url('https://www.gstatic.com/accountalerts/email/hodor/4-corner-ne.png')
                                right top no-repeat;
                            "
                                >
                                  <div>
                                    <br />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  width="6"
                                  style="
                              background: url('https://www.gstatic.com/accountalerts/email/hodor/4-pixel-w.png')
                                left center repeat-y;
                            "
                                >
                                  <div>
                                    <br />
                                  </div>
                                </td>
                                <td>
                                  <div
                                    style="
                                font-family: Roboto-Regular, Helvetica, Arial,
                                  sans-serif;
                                padding-left: 20px;
                                padding-right: 20px;
                                border-bottom: thin solid rgb(240, 240, 240);
                                font-size: 24px;
                                padding-top: 40px;
                                text-align: center;
                              "
                                  >
                                    <div>
                                      <h3>
                                        Verify your email address
                                        <br />
                                      </h3>
                                      <p style="line-height: 1.8">
                                        <span
                                          style="
                                      font-family: Roboto-Regular, Helvetica,
                                        Arial, sans-serif;
                                    "
                                        >
                                          <span style="font-size: 16px; line-height: 1.8;">
                                            <a
                                              style="color: #5e5e5e; text-decoration: none;"
                                              href="mailto:${t}"
                                              target="_blank"
                                            >${t}</a>
                                          </span>
                                        </span>
                                        <br />
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    style="
                                font-family: Roboto-Regular, Helvetica, Arial,
                                  sans-serif;
                                font-size: 13px;
                                line-height: 1.6;
                                padding-left: 20px;
                                padding-right: 20px;
                                padding-bottom: 32px;
                                padding-top: 24px;
                              "
                                  >
                                    <p>
                                      Hi ${e}, this email address was recently entered to create account in <a
                                        href="${a}"
                                        style="text-decoration: none;"
                                      >${a}</a>.
                                      <br />
                                    </p>
                                    <p>
                                      You can use this code to verify that this email belongs to you.
                                      <br />
                                    </p>
                                    <div style="font-size:24px;padding-top:20px;padding-bottom:20px;font-weight:bold;text-align:center">${r}</div>
                                    <p>
                                      If this wasn’t you, someone may have mistyped their email address. Keep this code to yourself, and no other action is needed at this moment.
                                    </p>
                                    <p>
                                      The Anix7 - Tools team
                                      <br />
                                    </p>
                                    <p>
                                      <br />
                                    </p>
                                  </div>
                                </td>
                                <td
                                  width="6"
                                  style="
                              background: url('https://www.gstatic.com/accountalerts/email/hodor/4-pixel-e.png')
                                left center repeat-y;
                            "
                                >
                                  <div>
                                    <br />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  height="5"
                                  width="6"
                                  style="
                              background: url('https://www.gstatic.com/accountalerts/email/hodor/4-corner-sw.png')
                                left top no-repeat;
                            "
                                >
                                  <div>
                                    <br />
                                  </div>
                                </td>
                                <td
                                  height="5"
                                  style="
                              background: url('https://www.gstatic.com/accountalerts/email/hodor/4-pixel-s.png')
                                center top repeat-x;
                            "
                                >
                                  <div>
                                    <br />
                                  </div>
                                </td>
                                <td
                                  height="5"
                                  width="6"
                                  style="
                              background: url('https://www.gstatic.com/accountalerts/email/hodor/4-corner-se.png')
                                left top no-repeat;
                            "
                                >
                                  <div>
                                    <br />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <br />
                                </td>
                                <td style="text-align: center;">
                                  <div
                                    style="
                                  font-family: Roboto-Regular, Helvetica, Arial,
                                    sans-serif;
                                  font-size: 12px;
                                  line-height: 20px;
                                  padding-top: 10px;
                                "
                                  >
                                    <div>
                                      You received this email to let you know
                                      about important changes to your Tools -
                                      Anix7 Account and services.
                                      <br />
                                    </div>
                                    <p style="color: #777; font-size: 14px; text-align: center; margin-top: 20px;">
                                      <a
                                        href="${a}"
                                        style="color: #007bff; text-decoration: none;"
                                      >
                                        \xa9 Anix7 Tools
                                      </a> &nbsp;|&nbsp;
                                      
                                      <a
                                        href="mailto:${s}"
                                        style="color: #007bff; text-decoration: none;"
                                      >
                                        Support Email
                                      </a>
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <br />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr height="32px"></tr>
            </tbody>
          </table>
        </body>
      </html>`})}},14294:(e,t,r)=>{"use strict";r.r(t),r.d(t,{POST:()=>p,retryInterval:()=>d});var i=r(8527),o=r(9913),a=r(68363),s=r(54155),n=r(12056),l=r(35302);let d=6e5;async function c(e,t,r,i){try{let{props:o}=(0,n.v)({userName:t+(r?" "+r:""),userEmail:e,otp:i,profilePicLink:`${process.env.BASE_URL}/assets/img/defaultProfilePic.jpg`});if(!(await (0,l.h)({sendTo:e,subject:"Verify your email address",fromName:"Anix7 - Tools (Verification)",html:o.children})).success)throw Error("Error sending email")}catch(e){throw Error("Error sending email")}}async function p(e){try{let{firstName:t,lastName:r,email:n}=await e.json();if(!t||!n)return i.NextResponse.json({error:"Missing required fields."},{status:400});await (0,o.A)();let l=Date.now(),p=n.toLowerCase().replace(/\+.*(?=@)/,"");if(await s.A.findOne({email:p}))return i.NextResponse.json({error:"Email is already in use.",errorPath:"email"},{status:400});let u=Math.floor(1e5+9e5*Math.random()).toString(),g=await a.A.findOne({email:p});if(g){let e=l-g.firstTry;if(g.totalTries>=3&&e<d)return i.NextResponse.json({error:`Maximum limits exceeded. Please try again after ${d/6e4} minutes.`},{status:400});g.otp=u;let o=new Date(g.lastTry);return g.lastTry=l,g.totalTries=g.totalTries+1,g.firstName=t,g.lastName=r,g.totalInputTries=0,g.totalTries>=4&&(g.firstTry=o,g.totalTries=l-o>d?1:2),await g.save(),await c(p,t,r,u),i.NextResponse.json({message:"OTP sent successfully!"},{status:200})}return await a.A.create({firstName:t,lastName:r,email:p,otp:u,lastTry:l,firstTry:l,totalTries:1}),await c(p,t,r,u),i.NextResponse.json({message:"OTP sent successfully!"},{status:201})}catch(e){return console.error(e),i.NextResponse.json({error:"Something went wrong."},{status:500})}}},15946:()=>{},35302:(e,t,r)=>{"use strict";r.d(t,{h:()=>o});var i=r(5027);async function o({sendTo:e,subject:t,html:r,fromName:o="Anix7 - Tools"}){if(!e||!t||!r)return console.error("Missing Parameters in sendMail"),{success:!1,error:"Missing required parameters"};let a=process.env.EMAIL_HOST,s=process.env.NO_REPLY_EMAIL,n=process.env.EMAIL_PASSWORD,l=i.createTransport({host:a,port:465,secure:!0,auth:{user:s,pass:n}});try{await l.verify();let i=await l.sendMail({from:`"${o}" <${s}>`,to:e,subject:t,html:r});return{success:!0,messageId:i.messageId}}catch(t){console.error("Email sending failed:",t);let e="Something went wrong while sending the email.";return 550===t.responseCode?e="Invalid recipient email address.":535===t.responseCode?e="Authentication failed. Check SMTP credentials.":t.message.includes("getaddrinfo ENOTFOUND")&&(e="SMTP server not found. Check EMAIL_HOST."),{success:!1,error:e}}}},54155:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var i=r(56037);let o=new i.Schema({_id:{type:i.Schema.Types.ObjectId,auto:!0},userId:{type:Number,unique:!0,required:!0},firstName:{type:String,required:!0},lastName:{type:String,default:null},email:{type:String,required:!0,unique:!0,lowercase:!0},password:{type:String,default:null},isVerified:{type:Boolean,default:!1},profilePic:{type:String,default:null},balance:{type:Number,default:0},referredBy:{type:Number,default:null}},{timestamps:!0}),a=i.models?.User||(0,i.model)("User",o)},55698:()=>{},68363:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var i=r(56037);let o=new i.Schema({firstName:{type:String,required:!0},lastName:{type:String,default:null},email:{type:String,required:!0,unique:!0,lowercase:!0},lastTry:{type:Date,default:null},otp:{type:String,required:!0},firstTry:{type:Date,default:null},totalTries:{type:Number,default:0},totalInputTries:{type:Number,default:0}},{timestamps:!0}),a=i.models?.SignUpOtp||(0,i.model)("SignUpOtp",o)}};