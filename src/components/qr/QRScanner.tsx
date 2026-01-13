import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";

type Props = {
  onScan: (text: string) => void;
};

 const Scanner = ({ onScan }: Props) => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "qr-reader",
      { fps: 10, qrbox: 250 },
      false
    );

    scanner.render(
      (text) => onScan(text),
      () => {}
    );

    return () => {
      scanner.clear().catch(() => {});
    };
  }, []);

  return <div id="qr-reader" />;
}

export default Scanner;
