import QRCode from "react-qr-code";

type Props = {
  value: string;
};

const QRCard = ({ value }: Props) => {
  return (
    <div style={{ padding: 16, border: "1px solid black", width: 180 }}>
      <QRCode value={value} size={128} />
    </div>
  );
}

export default QRCard;