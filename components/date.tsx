import { parseISO, format } from "date-fns";

export type DateProps = {
  dateString: string;
};

export default function Date({ dateString }: DateProps) {
  return (
    <time dateTime={dateString}>
      {format(parseISO(dateString), "LLLL d, yyyy")}
    </time>
  );
}
