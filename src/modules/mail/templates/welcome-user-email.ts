export default function WelcomeEmailTemplate(data: {
  email: string;
  companyName: string;
  supportEmail: string;
  userName: string;
}) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to ${data.companyName}!</title>
    <style type="text/css">
        body, table, td, p, a, li, blockquote {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
        img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
        .ReadMsgBody { width: 100%; }
        .ExternalClass { width: 100%; }
        .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; }
        @media only screen and (max-width: 600px) {
            .container { width: 100% !important; max-width: 100% !important; }
            .mobile-padding { padding-left: 20px !important; padding-right: 20px !important; }
            .mobile-center { text-align: center !important; }
            .mobile-hide { display: none !important; }
            .logo-text { font-size: 24px !important; }
        }
    </style>
</head>
<body style="margin:0; padding:0; background-color:#f8fafc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:#f8fafc;">
        <tr>
            <td align="center" style="padding:20px 0;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" class="container" style="background-color:#ffffff; border-radius:12px; box-shadow:0 4px 6px rgba(0,0,0,0.1); overflow:hidden;">
                    
                    <tr>
                        <td style="background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); padding:40px 0; text-align:center; position:relative;">
                            <div style="display:inline-block; background-color: rgba(255, 255, 255, 0.95); padding:15px 30px; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
                                <h1 class="logo-text" style="margin:0; font-size:28px; font-weight:bold; color:#4f46e5;">🏢 ${data.companyName}</h1>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td class="mobile-padding" style="padding:40px 50px; text-align:center;">
                            <h2 style="margin:0 0 20px 0; font-size:32px; font-weight:bold; color:#1a202c;">
                                Welcome, ${data.userName}! 👋
                            </h2>
                            <p style="margin:0 0 25px 0; font-size:16px; line-height:1.6; color:#4a5568;">
                                Your account has been successfully created by our administrator. We're excited to have you join our platform!
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td style="background-color:#f7fafc; padding:30px 50px; border-top:1px solid #e2e8f0;" class="mobile-padding">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom:20px;">
                                <tr>
                                    <td align="center">
                                        <a href="#" style="color:#4f46e5; text-decoration:none; font-size:12px; margin:0 10px;">Privacy Policy</a>
                                        <span style="color:#cbd5e0; font-size:12px;">|</span>
                                        <a href="#" style="color:#4f46e5; text-decoration:none; font-size:12px; margin:0 10px;">Terms of Service</a>
                                        <span style="color:#cbd5e0; font-size:12px;">|</span>
                                        <a href="#" style="color:#4f46e5; text-decoration:none; font-size:12px; margin:0 10px;">Help Center</a>
                                    </td>
                                </tr>
                            </table>
                            <p style="margin:0; font-size:12px; color:#a0aec0; text-align:center;">
                                © 2025 ${data.companyName}. All rights reserved.
                            </p>
                            <p style="margin:10px 0 0 0; font-size:11px; color:#a0aec0; text-align:center;">
                                This is an automated message. Please do not reply.
                            </p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>
  `;
}
