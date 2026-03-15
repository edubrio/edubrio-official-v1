import emailjs from "@emailjs/browser";

export default async function sendNotificationMail(
  emailParams: Record<string, string>,
  temp: string = "template_s2ugpxs"
) {
  await emailjs.send("service_zl1xcir", temp, emailParams, "JRZ5qZL4owRz0ui9A");
}
