const truncateText = (text, limit) => text?.length > limit ? `${text.substring(0, limit)}...` : text;

export default truncateText;
