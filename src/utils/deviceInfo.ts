import { v4 as uuidv4 } from "uuid";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

function getOrCreateUUID() {
  let uuid = localStorage.getItem("device_uuid");

  if (!uuid) {
    uuid = uuidv4();
    localStorage.setItem("device_uuid", uuid);
  }

  return uuid;
}

async function getFingerprint() {
  const fp = await FingerprintJS.load();
  const result = await fp.get();
  return result.visitorId;
}

export async function getDeviceInfo() {
  const uid = getOrCreateUUID();
  const ua = navigator.userAgent;
  const pf = navigator.platform;
  const lg = navigator.language;
  const sc = `${window.screen.width}x${window.screen.height}`;

  const [fp] = await Promise.all([getFingerprint()]);

  return {
    uid,
    fp,
    ua,
    pf,
    lg,
    sc,
  };
}
