const FormatDate = (data) => {
    const formatoData = new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'short' });
    const [dia, mes] = formatoData.formatToParts(data).map((part) => part.value);
    return `${dia} ${mes.toUpperCase()}`;
  };

export default FormatDate;