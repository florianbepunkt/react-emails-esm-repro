import { Button, Html } from "@react-email/components";
import { foo } from "../other-part-of-project/index.js"; // <--- path is fully specified compliant with NodeJS ESM spec
import * as React from "react";

export default function Email() {
  return (
    <Html>
      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        {foo.bar}
      </Button>
    </Html>
  );
}
