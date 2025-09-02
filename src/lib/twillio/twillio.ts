import { appConfig } from "src/config/app-config";
import { Twilio } from "twilio";

const accountSid = appConfig.TWILIO_ACCOUNT_SID;
const authToken = appConfig.TWILIO_AUTH_TOKEN;
const from = appConfig.TWILIO_FROM;
const client = new Twilio(accountSid, authToken);

export const sendSMS = async (sendSMSDto: { to: string; message: string }) => {
  try {
    const { message } = sendSMSDto;

    await client.messages.create({
      body: message,
      from: from,
      to: "+18777804236",
    });

    return message;
  } catch (error) {
    throw new Error("Failed to send SMS", { cause: error });
  }
};
