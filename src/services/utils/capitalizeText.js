export default function capitalizeText(text) {
  if (text != "") {
    let capitalizedText;
    switch (typeof text) {
      case "string":
        capitalizedText = text.at(0).toUpperCase() + text.slice(1);
        break;
      case "number":
        capitalizedText = text;
        break;
      default:
        capitalizedText = text;
        break;
    }
    return capitalizedText;
  }
}
