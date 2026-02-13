import { format } from "date-fns";
import { es } from "date-fns/locale";

const formatData = (isoString: string) => {
  const date = new Date(isoString);
  return format(date, "dd 'de' MMM 'de' yyyy", { locale: es });
};

export default formatData;
