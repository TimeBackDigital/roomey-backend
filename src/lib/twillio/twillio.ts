import { appConfig } from "src/config/app-config";
import { Twilio } from "twilio";
import { NormalizePhone } from "../helper";

const accountSid = appConfig.TWILIO_ACCOUNT_SID;
const authToken = appConfig.TWILIO_AUTH_TOKEN;
const from = appConfig.TWILIO_FROM;

const client = new Twilio(accountSid, authToken);

export const sendSMS = async (sendSMSDto: { to: string; message: string }) => {
  try {
    const { message, to } = sendSMSDto;

    await client.messages.create({
      body: message,
      from: from,
      to: NormalizePhone(to),
    });

    return message;
  } catch (error) {
    throw new Error("Failed to send SMS", { cause: error });
  }
};
