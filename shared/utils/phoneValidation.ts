import { PhoneNumberUtil } from "google-libphonenumber";

const phoneUtil = PhoneNumberUtil.getInstance();

export const isPhoneValid = (phone?: string) => {
  if (!phone) return false;

  try {
    const number = phoneUtil.parseAndKeepRawInput(phone);
    return phoneUtil.isValidNumber(number);
  } catch {
    return false;
  }
};
