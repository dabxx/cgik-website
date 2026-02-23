import { useToast } from "@chakra-ui/react";
import { useState } from "react";

const EMAILJS_SERVICE_ID = "service_9mj2pwa";
const EMAILJS_TEMPLATE_ID = "template_8406nms";
const EMAILJS_PUBLIC_KEY = "tIOSH2nWd1iz6JS6w";
const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzEFmICtibM2dmtsYacxNNY3Wt3LrVED-VRnOvUrq2FBMq7y25wgYaHx5ce7kMvFcVn/exec";

const initialFamily = Array(5)
  .fill(null)
  .map(() => ({
    name: "",
    dob: "",
    pob: "",
    sex: "",
    baptismDate: "",
    relationship: "",
  }));
const initialState = {
  fullName: "",
  fatherName: "",
  motherName: "",
  presentAddress: "",
  permanentAddress: "",
  dob: "",
  pob: "",
  maritalStatus: "",
  marriageDate: "",
  spouseName: "",
  baptismDate: "",
  baptismChurch: "",
  holySpiritBaptized: "",
  holySpiritDate: "",
  attendingFrom: "",
  transferMembership: "",
  transferFromChurch: "",
  pentecostalMember: "",
  pentecostalChurch: "",
  reasonToJoin: "",
  understoodDoctrine: "",
  idProof: [],
  idProofOther: "",
  family: initialFamily,
};

// ── Static printable view (no inputs, used for screenshot) ──────────────────
function PrintView({ form }) {
  const v = (x) => x || "";
  const fmtDate = (d) =>
    d ? new Date(d + "T00:00:00").toLocaleDateString("en-IN") : "";
  const chk = (val, opt) => (val === opt ? "☑" : "☐");

  const Row = ({ label, value, flex }) => (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: 4,
        flex: flex || 1,
        marginBottom: 6,
      }}
    >
      <span style={{ fontSize: 11, fontWeight: 600, whiteSpace: "nowrap" }}>
        {label}
      </span>
      <span
        style={{
          flex: 1,
          borderBottom: "1px solid #555",
          fontSize: 11,
          minWidth: 40,
          paddingBottom: 1,
          paddingLeft: 4,
        }}
      >
        {value}
      </span>
    </div>
  );

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#fff",
        padding: 24,
        width: 750,
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          borderBottom: "2px solid #333",
          paddingBottom: 10,
          marginBottom: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
          }}
        >
          <img
            src="/images/logo.jpeg"
            alt="CGI Logo"
            style={{ width: 60, height: 60, objectFit: "contain" }}
          />
          <div>
            <div style={{ fontSize: 20, fontWeight: "bold" }}>
              Church of God (Full Gospel) in India
            </div>
            <div style={{ fontSize: 10 }}>
              Reg. No.: 18/1949 Under Societies Registration Act XXI / 1860
            </div>
            <div style={{ fontSize: 10 }}>
              # 418, 80ft Road, 6th Block, (Near BMTS Bus Depot), Koramangala,
              Bangalore - 560 095
            </div>
            <div style={{ fontSize: 10 }}>
              Tel.: +91 80-2552 1917, Email: cgikoramangala@gmail.com
            </div>
          </div>
        </div>
      </div>

      {/* Title */}
      <div
        style={{
          background: "#333",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8px 0",
          fontWeight: "bold",
          fontSize: 12,
          letterSpacing: 2,
          marginBottom: 12,
        }}
      >
        MEMBERSHIP APPLICATION FORM
      </div>

      {/* Intro box */}
      <div
        style={{
          border: "1px solid #aaa",
          padding: 8,
          display: "flex",
          gap: 10,
          marginBottom: 10,
        }}
      >
        <div style={{ flex: 1, fontSize: 10 }}>
          <div>
            ➤ <strong>Do you want become a member of our church?</strong>
          </div>
          <div>
            ➤{" "}
            <strong>
              Have you been praying about joining this exciting and growing
              ministry?
            </strong>
          </div>
          <div>
            ➤{" "}
            <strong>
              Are you new to the area and looking to transfer your membership?
            </strong>
          </div>
          <div style={{ marginTop: 4 }}>
            If the answer is <strong>"YES"</strong> to any of these questions,
            please take a moment to fill out the information below and drop it
            off at the church office.
          </div>
        </div>
        <div
          style={{
            border: "1px solid #aaa",
            padding: 6,
            width: 80,
            textAlign: "center",
            fontSize: 10,
            fontWeight: "bold",
          }}
        >
          SL. No.
        </div>
      </div>

      <Row label="Full name (in block letters)" value={v(form.fullName)} />
      <div style={{ display: "flex", gap: 16 }}>
        <Row label="Name of father" value={v(form.fatherName)} />
        <Row label="Name of mother" value={v(form.motherName)} />
      </div>
      <Row label="Present address" value={v(form.presentAddress)} />
      <Row label="Permanent address" value={v(form.permanentAddress)} />
      <div style={{ display: "flex", gap: 16 }}>
        <Row label="Date of birth" value={fmtDate(form.dob)} />
        <Row label="Place of birth" value={v(form.pob)} />
      </div>
      <div
        style={{
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          marginBottom: 6,
          fontSize: 11,
        }}
      >
        <Row label="Marital Status" />
        <span>{chk(form.maritalStatus, "Unmarried")} Unmarried</span>
        <span>{chk(form.maritalStatus, "Married")} Married</span>
        <Row label="Date of marriage" value={fmtDate(form.marriageDate)} />
      </div>
      <Row label="Name of spouse" value={v(form.spouseName)} />
      <div style={{ display: "flex", gap: 16 }}>
        <Row label="Date of faith baptism" value={fmtDate(form.baptismDate)} />
        <Row
          label="Baptized under which church"
          value={v(form.baptismChurch)}
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          marginBottom: 6,
          fontSize: 11,
          alignItems: "flex-end",
        }}
      >
        <span>Are you baptized in the Holy Spirit?</span>
        <span>{chk(form.holySpiritBaptized, "No")} No</span>
        <span>{chk(form.holySpiritBaptized, "Yes")} Yes</span>
        <Row
          label="Date of Holy Spirit Baptism"
          value={fmtDate(form.holySpiritDate)}
        />
      </div>
      <Row
        label="Date from which you are attending this church"
        value={fmtDate(form.attendingFrom)}
      />
      <div
        style={{
          display: "flex",
          gap: 12,
          marginBottom: 6,
          fontSize: 11,
          alignItems: "center",
        }}
      >
        <span>Would you like to transfer your membership to this church?</span>
        <span>{chk(form.transferMembership, "Yes")} Yes</span>
        <span>{chk(form.transferMembership, "No")} No</span>
      </div>
      <Row
        label="If yes, then which church are you transferring from?"
        value={v(form.transferFromChurch)}
      />
      <div
        style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          marginBottom: 6,
          fontSize: 11,
          alignItems: "flex-end",
        }}
      >
        <span>Were you ever a member of any Pentecostal church?</span>
        <span>{chk(form.pentecostalMember, "No")} No</span>
        <span>{chk(form.pentecostalMember, "Yes")} Yes</span>
        <Row label="Church name" value={v(form.pentecostalChurch)} />
      </div>
      <Row label="Reason to join this church" value={v(form.reasonToJoin)} />
      <div
        style={{
          display: "flex",
          gap: 12,
          marginBottom: 6,
          fontSize: 11,
          alignItems: "center",
        }}
      >
        <span>Have you understood the doctrine of CGI?</span>
        <span>{chk(form.understoodDoctrine, "Yes")} Yes</span>
        <span>{chk(form.understoodDoctrine, "No")} No</span>
      </div>
      <div
        style={{
          fontSize: 11,
          marginBottom: 10,
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <span>ID proof enclosed</span>
        {["Voter ID", "Passport", "Aadhaar card"].map((v2) => (
          <span key={v2}>
            {chk(form.idProof.includes(v2) ? v2 : "", v2)} {v2}
          </span>
        ))}
        <span>
          Others:{" "}
          <span
            style={{
              borderBottom: "1px solid #555",
              minWidth: 80,
              display: "inline-block",
              paddingLeft: 4,
            }}
          >
            {v(form.idProofOther)}
          </span>
        </span>
      </div>

      {/* Family */}
      <div
        style={{
          background: "#333",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 32,
          fontWeight: "bold",
          fontSize: 12,
          letterSpacing: 2,
          marginBottom: 12,
          textAlign: "center",
          lineHeight: "32px",
        }}
      >
        FAMILY DETAILS{" "}
        <em style={{ fontWeight: "normal" }}>
          (To be completed by the Head of the Family)
        </em>
      </div>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: 10,
          marginBottom: 10,
        }}
      >
        <thead>
          <tr style={{ background: "#eee" }}>
            {[
              "Name",
              "Date of birth",
              "Place of birth",
              "Sex",
              "Date of faith baptism",
              "Relationship",
            ].map((h) => (
              <th
                key={h}
                style={{
                  border: "1px solid #aaa",
                  padding: "4px 6px",
                  textAlign: "left",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {form.family.map((r, i) => (
            <tr key={i}>
              <td
                style={{
                  border: "1px solid #aaa",
                  padding: "4px 6px",
                  minHeight: 22,
                }}
              >
                {r.name}
              </td>
              <td style={{ border: "1px solid #aaa", padding: "4px 6px" }}>
                {fmtDate(r.dob)}
              </td>
              <td style={{ border: "1px solid #aaa", padding: "4px 6px" }}>
                {r.pob}
              </td>
              <td style={{ border: "1px solid #aaa", padding: "4px 6px" }}>
                {r.sex}
              </td>
              <td style={{ border: "1px solid #aaa", padding: "4px 6px" }}>
                {fmtDate(r.baptismDate)}
              </td>
              <td style={{ border: "1px solid #aaa", padding: "4px 6px" }}>
                {r.relationship}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Declaration */}
      <div
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 12,
          marginBottom: 6,
        }}
      >
        DECLARATION
      </div>
      <p
        style={{
          fontSize: 10,
          lineHeight: 1.6,
          color: "#444",
          marginBottom: 20,
        }}
      >
        I have read and understood the doctrines, policies and disciplines of
        CGI and I am satisfied with it and have willingly agreed to obey,
        cooperate and support all the church activities hereafter. If and when
        granted membership with the church, I promise to do my best for the
        furtherance of His kingdom as a good Christian soldier. My request for
        membership is voluntary and taken by me independently. I certify that
        the information given above is true to the best of my knowledge and
        belief.
      </p>
      <div
        style={{
          textAlign: "right",
          fontSize: 10,
          fontStyle: "italic",
          marginBottom: 4,
        }}
      >
        Applicant Signature with date
      </div>
      <div
        style={{
          borderTop: "1px solid #555",
          width: 200,
          marginLeft: "auto",
          marginBottom: 16,
        }}
      ></div>

      {/* Office use */}
      <div
        style={{
          background: "#333",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 32,
          fontWeight: "bold",
          fontSize: 12,
          letterSpacing: 2,
          marginBottom: 12,
          textAlign: "center",
          lineHeight: "32px",
        }}
      >
        OFFICE USE ONLY
      </div>
      <table
        style={{ width: "100%", borderCollapse: "collapse", fontSize: 10 }}
      >
        <thead>
          <tr style={{ background: "#eee" }}>
            {[
              "Approved by",
              "Signature of pastor",
              "Date",
              "Office seal",
              "Remarks",
            ].map((h) => (
              <th
                key={h}
                style={{
                  border: "1px solid #aaa",
                  padding: "4px 6px",
                  textAlign: "left",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <td
                  key={i}
                  style={{ border: "1px solid #aaa", height: 30 }}
                ></td>
              ))}
          </tr>
        </tbody>
      </table>
      <div
        style={{
          fontSize: 9,
          color: "#888",
          textAlign: "center",
          marginTop: 12,
        }}
      >
        Submitted: {new Date().toLocaleString()}
      </div>
    </div>
  );
}

// ── Main form ────────────────────────────────────────────────────────────────
export default function MembershipForm() {
  const toast = useToast();
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const set = (f, v) => setForm((p) => ({ ...p, [f]: v }));
  const toggleIdProof = (v) =>
    setForm((p) => ({
      ...p,
      idProof: p.idProof.includes(v)
        ? p.idProof.filter((x) => x !== v)
        : [...p.idProof, v],
    }));
  const setFamily = (i, f, v) =>
    setForm((p) => ({
      ...p,
      family: p.family.map((r, idx) => (idx === i ? { ...r, [f]: v } : r)),
    }));

  const loadHtml2Canvas = () =>
    new Promise((res, rej) => {
      if (window.html2canvas) return res();
      const s = document.createElement("script");
      s.src =
        "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
      s.onload = res;
      s.onerror = rej;
      document.head.appendChild(s);
    });

  const captureImage = async () => {
    await loadHtml2Canvas();
    const el = document.getElementById("print-view-capture");
    return await window.html2canvas(el, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      logging: false,
    });
  };

  const handleSubmit = async () => {
    if (!form.fullName.trim()) {
      toast({
        title: "Missing required field",
        description: "Please enter your full name.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-center",
      });
      return;
    }

    setSubmitting(true);
    setStatus("pdf");

    try {
      // 1. Capture the print view as image
      const canvas = await captureImage();
      const imageBase64 = canvas.toDataURL("image/png");
      const fileName = `CGI_Membership_${form.fullName.replace(/\s+/g, "_")}_${Date.now()}.png`;

      // 2. Upload to Google Drive
      setStatus("uploading");
      const driveRes = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "cors",
        redirect: "follow",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ image: imageBase64, fileName }),
      });
      const driveJson = await driveRes.json();
      if (!driveJson.success)
        throw new Error("Google Drive upload failed: " + driveJson.error);
      const { url: fileUrl, directUrl } = driveJson;

      // 3. Store data
      try {
        if (window.storage?.set)
          await window.storage.set(
            `membership:${Date.now()}`,
            JSON.stringify({ ...form, submittedAt: new Date().toISOString() }),
          );
      } catch {}

      // 4. Send email
      setStatus("email");
      const fam = form.family.filter((r) => r.name);
      const msg = `NEW MEMBERSHIP APPLICATION\nSubmitted: ${new Date().toLocaleString()}

PERSONAL DETAILS
Full Name: ${form.fullName}
Father: ${form.fatherName} | Mother: ${form.motherName}
Present Address: ${form.presentAddress}
Permanent Address: ${form.permanentAddress}
DOB: ${form.dob} | Place: ${form.pob}
Marital Status: ${form.maritalStatus} | Marriage Date: ${form.marriageDate} | Spouse: ${form.spouseName}

BAPTISM & FAITH
Faith Baptism: ${form.baptismDate} | Church: ${form.baptismChurch}
Holy Spirit Baptized: ${form.holySpiritBaptized} | Date: ${form.holySpiritDate}
Attending Since: ${form.attendingFrom}

MEMBERSHIP
Transfer: ${form.transferMembership} | From: ${form.transferFromChurch}
Pentecostal Member: ${form.pentecostalMember} | Church: ${form.pentecostalChurch}
Reason: ${form.reasonToJoin}
Understood Doctrine: ${form.understoodDoctrine}
ID Proof: ${[...form.idProof, form.idProofOther].filter(Boolean).join(", ")}

FAMILY MEMBERS
${fam.length ? fam.map((r) => `${r.name} | DOB: ${r.dob} | ${r.pob} | ${r.sex} | Baptism: ${r.baptismDate} | ${r.relationship}`).join("\n") : "None"}

📄 View Form Image: ${fileUrl}
⬇ Direct Link: ${directUrl}`;

      await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.fullName,
          message: msg,
          subject: `New Membership Application - ${form.fullName}`,
        },
        EMAILJS_PUBLIC_KEY,
      );

      toast({
        title: "Application Submitted!",
        description:
          "Thank you for submitting your membership application.",
        status: "success",
        duration: 7000,
        isClosable: true,
        position: "top-center",
      });

      setForm(initialState);
      setStatus("");
    } catch (e) {
      console.error(e);
      toast({
        title: "Submission failed",
        description:
          e?.text || e?.message || "Something went wrong. Please try again.",
        status: "error",
        duration: 7000,
        isClosable: true,
        position: "top-center",
      });
      setStatus("");
    }

    setSubmitting(false);
  };

  if (typeof window !== "undefined" && !window.emailjs) {
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    s.onload = () => window.emailjs.init(EMAILJS_PUBLIC_KEY);
    document.head.appendChild(s);
  }

  const inp =
    "border-b border-gray-400 flex-1 outline-none text-sm px-1 py-0.5 bg-transparent min-w-0";
  const lbl = "text-sm font-medium whitespace-nowrap mr-1";

  const statusMsg = () => {
    if (status === "pdf")
      return { bg: "blue", icon: "📸", text: "Capturing form image..." };
    if (status === "uploading")
      return { bg: "blue", icon: "☁️", text: "Uploading to Google Drive..." };
    if (status === "email")
      return { bg: "blue", icon: "📤", text: "Sending email..." };
    if (status === "success")
      return {
        bg: "green",
        icon: "✅",
        text: "Application submitted! Image saved to Google Drive and link sent to your email.",
      };
    if (status.startsWith("error:"))
      return {
        bg: "red",
        icon: "❌",
        text: status.replace("error:", "").trim(),
      };
    return null;
  };
  const sm = statusMsg();

  return (
    <div className="min-h-screen bg-[#dae1e3] text-black">
      {/* Header Section */}
      <div className="bg-white shadow-sm text-white mb-10">
        <div className="max-w-6xl mx-auto px-6 py-5 text-center">
          <p className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-1">
            Join the Body of Christ
          </p>
          <h1 className="text-4xl md:text-4xl font-serif text-blue-900 mb-4">
            Church Membership
          </h1>
          <div className="w-16 h-1 bg-blue-400 mx-auto mb-6 rounded-full" />
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed font-semibold">
            Membership is more than a name on a list. It is a covenant
            commitment to walk together in faith, serve one another in love, and
            grow in the knowledge and grace of our Lord Jesus Christ. We warmly
            invite you to take this step and become a vital part of our church
            family.
          </p>
        </div>
      </div>
      {/* Hidden print view for screenshot */}
      <div
        style={{
          position: "fixed",
          left: -9999,
          top: 0,
          zIndex: -1,
          pointerEvents: "none",
        }}
      >
        <div id="print-view-capture">
          <PrintView form={form} />
        </div>
      </div>

      {/* Interactive form */}
      <div className="max-w-3xl mx-auto bg-white shadow-md">
        <div className="text-center py-4 px-4 border-b-2 border-gray-800">
          <div className="flex items-center justify-center gap-3">
            <img
              src="/images/logo.jpeg"
              alt="CGI Logo"
              style={{ width: 60, height: 60, objectFit: "contain" }}
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Church of God (Full Gospel) in India
              </h1>
              <p className="text-xs text-gray-600">
                Reg. No.: 18/1949 Under Societies Registration Act XXI / 1860
              </p>
              <p className="text-xs text-gray-600">
                # 418, 80ft Road, 6th Block, (Near BMTS Bus Depot), Koramangala,
                Bangalore - 560 095
              </p>
              <p className="text-xs text-gray-600">
                Tel.: +91 80-2552 1917, Email: cgikoramangala@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            background: "#333",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 32,
            fontWeight: "bold",
            fontSize: 12,
            letterSpacing: 2,
            marginBottom: 12,
            textAlign: "center",
            lineHeight: "32px",
          }}
        >
          MEMBERSHIP APPLICATION FORM
        </div>

        <div className="p-5 space-y-4">
          <div className="flex gap-4 border border-gray-300 p-3">
            <div className="flex-1 text-sm space-y-1">
              <p>
                ➤ <strong>Do you want become a member of our church?</strong>
              </p>
              <p>
                ➤{" "}
                <strong>
                  Have you been praying about joining this exciting and growing
                  ministry?
                </strong>
              </p>
              <p>
                ➤{" "}
                <strong>
                  Are you new to the area and looking to transfer your
                  membership?
                </strong>
              </p>
              <p className="text-xs mt-1">
                If the answer is <strong>"YES"</strong> to any of these
                questions, please take a moment to fill out the information
                below and drop it off at the church office.
              </p>
            </div>
            <div className="border border-gray-400 p-2 text-xs font-bold w-24 text-center">
              SL. No.
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className={lbl}>Full name (in block letters)</span>
            <input
              className={inp}
              value={form.fullName}
              onChange={(e) => set("fullName", e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 flex-1">
              <span className={lbl}>Name of father</span>
              <input
                className={inp}
                value={form.fatherName}
                onChange={(e) => set("fatherName", e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 flex-1">
              <span className={lbl}>Name of mother</span>
              <input
                className={inp}
                value={form.motherName}
                onChange={(e) => set("motherName", e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className={lbl}>Present address</span>
            <input
              className={inp}
              value={form.presentAddress}
              onChange={(e) => set("presentAddress", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <span className={lbl}>Permanent address</span>
            <input
              className={inp}
              value={form.permanentAddress}
              onChange={(e) => set("permanentAddress", e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className={lbl}>Date of birth</span>
              <input
                type="date"
                className={inp}
                value={form.dob}
                onChange={(e) => set("dob", e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 flex-1">
              <span className={lbl}>Place of birth</span>
              <input
                className={inp}
                value={form.pob}
                onChange={(e) => set("pob", e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <span className={lbl}>Marital Status</span>
            {["Unmarried", "Married"].map((s) => (
              <label
                key={s}
                className="flex items-center gap-1 text-sm cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={form.maritalStatus === s}
                  onChange={() =>
                    set("maritalStatus", form.maritalStatus === s ? "" : s)
                  }
                />
                {s}
              </label>
            ))}
            <div className="flex items-center gap-2">
              <span className={lbl}>Date of marriage</span>
              <input
                type="date"
                className={inp}
                value={form.marriageDate}
                onChange={(e) => set("marriageDate", e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 flex-1">
              <span className={lbl}>Name of spouse</span>
              <input
                className={inp}
                value={form.spouseName}
                onChange={(e) => set("spouseName", e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <span className={lbl}>Date of faith baptism</span>
              <input
                type="date"
                className={inp}
                value={form.baptismDate}
                onChange={(e) => set("baptismDate", e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 flex-1">
              <span className={lbl}>Baptized under which church</span>
              <input
                className={inp}
                value={form.baptismChurch}
                onChange={(e) => set("baptismChurch", e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className={lbl}>Are you baptized in the Holy Spirit?</span>
            {["No", "Yes"].map((v) => (
              <label
                key={v}
                className="flex items-center gap-1 text-sm cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={form.holySpiritBaptized === v}
                  onChange={() =>
                    set(
                      "holySpiritBaptized",
                      form.holySpiritBaptized === v ? "" : v,
                    )
                  }
                />
                {v}
              </label>
            ))}
            <div className="flex items-center gap-2 flex-1">
              <span className={lbl}>Date of Holy Spirit Baptism</span>
              <input
                type="date"
                className={inp}
                value={form.holySpiritDate}
                onChange={(e) => set("holySpiritDate", e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className={lbl}>
              Date from which you are attending this church
            </span>
            <input
              type="date"
              className={inp}
              value={form.attendingFrom}
              onChange={(e) => set("attendingFrom", e.target.value)}
            />
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className={lbl}>
              Would you like to transfer your membership to this church?
            </span>
            {["Yes", "No"].map((v) => (
              <label
                key={v}
                className="flex items-center gap-1 text-sm cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={form.transferMembership === v}
                  onChange={() =>
                    set(
                      "transferMembership",
                      form.transferMembership === v ? "" : v,
                    )
                  }
                />
                {v}
              </label>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className={lbl}>
              If yes, then which church are you transferring from?
            </span>
            <input
              className={inp}
              value={form.transferFromChurch}
              onChange={(e) => set("transferFromChurch", e.target.value)}
            />
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className={lbl}>
              Were you ever a member of any Pentecostal church?
            </span>
            {["No", "Yes"].map((v) => (
              <label
                key={v}
                className="flex items-center gap-1 text-sm cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={form.pentecostalMember === v}
                  onChange={() =>
                    set(
                      "pentecostalMember",
                      form.pentecostalMember === v ? "" : v,
                    )
                  }
                />
                {v}
              </label>
            ))}
            <div className="flex items-center gap-2 flex-1">
              <span className={lbl}>Church name</span>
              <input
                className={inp}
                value={form.pentecostalChurch}
                onChange={(e) => set("pentecostalChurch", e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className={lbl}>Reason to join this church</span>
            <input
              className={inp}
              value={form.reasonToJoin}
              onChange={(e) => set("reasonToJoin", e.target.value)}
            />
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className={lbl}>
              Have you understood the doctrine of CGI?
            </span>
            {["Yes", "No"].map((v) => (
              <label
                key={v}
                className="flex items-center gap-1 text-sm cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={form.understoodDoctrine === v}
                  onChange={() =>
                    set(
                      "understoodDoctrine",
                      form.understoodDoctrine === v ? "" : v,
                    )
                  }
                />
                {v}
              </label>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className={lbl}>ID proof enclosed</span>
            {["Voter ID", "Passport", "Aadhaar card"].map((v) => (
              <label
                key={v}
                className="flex items-center gap-1 text-sm cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={form.idProof.includes(v)}
                  onChange={() => toggleIdProof(v)}
                />
                {v}
              </label>
            ))}
            <span className="text-sm">Others:</span>
            <input
              className="border-b border-gray-400 outline-none text-sm px-1 w-32 bg-transparent"
              value={form.idProofOther}
              onChange={(e) => set("idProofOther", e.target.value)}
            />
          </div>

          {/* Family */}
          <div>
            <div className="bg-gray-800 text-white text-center py-1.5 text-sm font-bold">
              FAMILY DETAILS{" "}
              <span className="font-normal italic">
                (To be completed by the Head of the Family)
              </span>
            </div>
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr className="bg-gray-100">
                  {[
                    "Name",
                    "Date of birth",
                    "Place of birth",
                    "Sex",
                    "Date of faith baptism",
                    "Relationship",
                  ].map((h) => (
                    <th
                      key={h}
                      className="border border-gray-400 px-1 py-1.5 font-bold text-left"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {form.family.map((row, i) => (
                  <tr key={i}>
                    <td className="border border-gray-400 p-0.5">
                      <input
                        className="w-full outline-none px-1 py-1 text-xs"
                        value={row.name}
                        onChange={(e) => setFamily(i, "name", e.target.value)}
                      />
                    </td>
                    <td className="border border-gray-400 p-0.5">
                      <input
                        type="date"
                        className="w-full outline-none px-1 py-1 text-xs"
                        value={row.dob}
                        onChange={(e) => setFamily(i, "dob", e.target.value)}
                      />
                    </td>
                    <td className="border border-gray-400 p-0.5">
                      <input
                        className="w-full outline-none px-1 py-1 text-xs"
                        value={row.pob}
                        onChange={(e) => setFamily(i, "pob", e.target.value)}
                      />
                    </td>
                    <td className="border border-gray-400 p-0.5">
                      <select
                        className="w-full outline-none px-1 py-1 text-xs bg-transparent"
                        value={row.sex}
                        onChange={(e) => setFamily(i, "sex", e.target.value)}
                      >
                        <option value=""></option>
                        <option>M</option>
                        <option>F</option>
                      </select>
                    </td>
                    <td className="border border-gray-400 p-0.5">
                      <input
                        type="date"
                        className="w-full outline-none px-1 py-1 text-xs"
                        value={row.baptismDate}
                        onChange={(e) =>
                          setFamily(i, "baptismDate", e.target.value)
                        }
                      />
                    </td>
                    <td className="border border-gray-400 p-0.5">
                      <input
                        className="w-full outline-none px-1 py-1 text-xs"
                        value={row.relationship}
                        onChange={(e) =>
                          setFamily(i, "relationship", e.target.value)
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Declaration */}
          <div>
            <div className="text-center font-bold text-sm mb-2">
              DECLARATION
            </div>
            <p className="text-xs text-gray-700 leading-relaxed">
              I have read and understood the doctrines, policies and disciplines
              of CGI and I am satisfied with it and have willingly agreed to
              obey, cooperate and support all the church activities hereafter.
              If and when granted membership with the church, I promise to do my
              best for the furtherance of His kingdom as a good Christian
              soldier. My request for membership is voluntary and taken by me
              independently. I certify that the information given above is true
              to the best of my knowledge and belief.
            </p>
            <div className="text-right text-xs italic mt-4 mr-4">
              Applicant Signature with date
            </div>
            <div className="border-t border-gray-400 mt-1 mr-4 w-48 ml-auto"></div>
          </div>

          {/* Buttons */}
          <div className="flex mt-4 w-full justify-center">
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="w-48 bg-purple-500 hover:bg-purple-600 text-white px-3 py-2 rounded-lg text-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              {submitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Submitting...
                </span>
              ) : (
                "SUBMIT"
              )}
            </button>
          </div>

          {/* Office Use */}
          <div className="mt-6">
            <div className="bg-gray-800 text-white text-center py-1.5 text-sm font-bold tracking-widest">
              OFFICE USE ONLY
            </div>
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr className="bg-gray-100">
                  {[
                    "Approved by",
                    "Signature of pastor",
                    "Date",
                    "Office seal",
                    "Remarks",
                  ].map((h) => (
                    <th
                      key={h}
                      className="border border-gray-400 px-2 py-1.5 font-bold text-left"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <td key={i} className="border border-gray-400 h-10"></td>
                    ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
