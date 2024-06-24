export default function extractFirstName(fullName) {
  if (!fullName) return "";

  // Split full name into parts
  const nameParts = fullName.split(" ");

  // Get the first part of the name
  let firstName = nameParts[0];

  // Trim first name if it exceeds 15 characters
  if (firstName.length > 15) {
    firstName = firstName.substring(0, 15);
  }

  return firstName;
}
