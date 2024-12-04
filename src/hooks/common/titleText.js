const TitleText = (text) => text
    ? `${text.substring(0, 1).toUpperCase()}${text.substring(1).toLowerCase()}`
    : "";
export default TitleText;
