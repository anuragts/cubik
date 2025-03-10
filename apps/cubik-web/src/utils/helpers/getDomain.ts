"use client";
export function getDomain(url: string) {
  var hostname;
  if (url?.indexOf("://") > -1) {
    hostname = url?.split("/")[2];
  } else {
    hostname = url?.split("/")[0];
  }
  hostname = hostname?.split(":")[0];
  hostname = hostname?.split("?")[0];

  if (hostname?.startsWith("www.")) {
    hostname = hostname?.slice(4);
  }
  return hostname;
}
