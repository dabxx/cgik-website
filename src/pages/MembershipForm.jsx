import { useToast } from "@chakra-ui/react";
import { useState } from "react";

const EMAILJS_SERVICE_ID = "service_9mj2pwa";
const EMAILJS_TEMPLATE_ID = "template_8406nms";
const EMAILJS_PUBLIC_KEY = "tIOSH2nWd1iz6JS6w";
const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzEFmICtibM2dmtsYacxNNY3Wt3LrVED-VRnOvUrq2FBMq7y25wgYaHx5ce7kMvFcVn/exec";

const initialFamily = Array(5).fill(null).map(() => ({
  name: "", dob: "", pob: "", sex: "", baptismDate: "", relationship: "",
}));

const initialState = {
  fullName: "", fatherName: "", motherName: "",
  presentAddress: "", permanentAddress: "",
  dob: "", pob: "", maritalStatus: "", marriageDate: "", spouseName: "",
  baptismDate: "", baptismChurch: "", holySpiritBaptized: "", holySpiritDate: "",
  attendingFrom: "", transferMembership: "", transferFromChurch: "",
  pentecostalMember: "", pentecostalChurch: "", reasonToJoin: "",
  understoodDoctrine: "", idProof: [], idProofOther: "",
  family: initialFamily,
};

// ── PrintView (unchanged) ────────────────────────────────────────────────────
function PrintView({ form }) {
  const v = (x) => x || "";
  const fmtDate = (d) => d ? new Date(d + "T00:00:00").toLocaleDateString("en-IN") : "";
  const chk = (val, opt) => (val === opt ? "☑" : "☐");
  const Row = ({ label, value }) => (
    <div style={{ display:"flex", alignItems:"flex-end", gap:4, flex:1, marginBottom:6 }}>
      <span style={{ fontSize:11, fontWeight:600, whiteSpace:"nowrap" }}>{label}</span>
      <span style={{ flex:1, borderBottom:"1px solid #555", fontSize:11, minWidth:40, paddingBottom:1, paddingLeft:4 }}>{value}</span>
    </div>
  );
  return (
    <div style={{ fontFamily:"Arial, sans-serif", background:"#fff", padding:24, width:750 }}>
      <div style={{ textAlign:"center", borderBottom:"2px solid #333", paddingBottom:10, marginBottom:10 }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:12 }}>
          <img src="/images/logo.jpeg" alt="CGI Logo" style={{ width:60, height:60, objectFit:"contain" }} />
          <div>
            <div style={{ fontSize:20, fontWeight:"bold" }}>Church of God (Full Gospel) in India</div>
            <div style={{ fontSize:10 }}>Reg. No.: 18/1949 Under Societies Registration Act XXI / 1860</div>
            <div style={{ fontSize:10 }}># 418, 80ft Road, 6th Block, (Near BMTS Bus Depot), Koramangala, Bangalore - 560 095</div>
            <div style={{ fontSize:10 }}>Tel.: +91 80-2552 1917, Email: cgikoramangala@gmail.com</div>
          </div>
        </div>
      </div>
      <div style={{ background:"#333", color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", padding:"8px 0", fontWeight:"bold", fontSize:12, letterSpacing:2, marginBottom:12 }}>
        MEMBERSHIP APPLICATION FORM
      </div>
      <div style={{ border:"1px solid #aaa", padding:8, display:"flex", gap:10, marginBottom:10 }}>
        <div style={{ flex:1, fontSize:10 }}>
          <div>➤ <strong>Do you want become a member of our church?</strong></div>
          <div>➤ <strong>Have you been praying about joining this exciting and growing ministry?</strong></div>
          <div>➤ <strong>Are you new to the area and looking to transfer your membership?</strong></div>
          <div style={{ marginTop:4 }}>If the answer is <strong>"YES"</strong> to any of these questions, please fill out the information below.</div>
        </div>
        <div style={{ border:"1px solid #aaa", padding:6, width:80, textAlign:"center", fontSize:10, fontWeight:"bold" }}>SL. No.</div>
      </div>
      <Row label="Full name (in block letters)" value={v(form.fullName)} />
      <div style={{ display:"flex", gap:16 }}>
        <Row label="Name of father" value={v(form.fatherName)} />
        <Row label="Name of mother" value={v(form.motherName)} />
      </div>
      <Row label="Present address" value={v(form.presentAddress)} />
      <Row label="Permanent address" value={v(form.permanentAddress)} />
      <div style={{ display:"flex", gap:16 }}>
        <Row label="Date of birth" value={fmtDate(form.dob)} />
        <Row label="Place of birth" value={v(form.pob)} />
      </div>
      <div style={{ display:"flex", gap:16, flexWrap:"wrap", marginBottom:6, fontSize:11 }}>
        <span>Marital Status:</span>
        <span>{chk(form.maritalStatus,"Unmarried")} Unmarried</span>
        <span>{chk(form.maritalStatus,"Married")} Married</span>
        <Row label="Date of marriage" value={fmtDate(form.marriageDate)} />
      </div>
      <Row label="Name of spouse" value={v(form.spouseName)} />
      <div style={{ display:"flex", gap:16 }}>
        <Row label="Date of faith baptism" value={fmtDate(form.baptismDate)} />
        <Row label="Baptized under which church" value={v(form.baptismChurch)} />
      </div>
      <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:6, fontSize:11, alignItems:"flex-end" }}>
        <span>Are you baptized in the Holy Spirit?</span>
        <span>{chk(form.holySpiritBaptized,"No")} No</span>
        <span>{chk(form.holySpiritBaptized,"Yes")} Yes</span>
        <Row label="Date of Holy Spirit Baptism" value={fmtDate(form.holySpiritDate)} />
      </div>
      <Row label="Date from which you are attending this church" value={fmtDate(form.attendingFrom)} />
      <div style={{ display:"flex", gap:12, marginBottom:6, fontSize:11, alignItems:"center" }}>
        <span>Would you like to transfer your membership?</span>
        <span>{chk(form.transferMembership,"Yes")} Yes</span>
        <span>{chk(form.transferMembership,"No")} No</span>
      </div>
      <Row label="If yes, transferring from which church?" value={v(form.transferFromChurch)} />
      <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:6, fontSize:11, alignItems:"flex-end" }}>
        <span>Were you ever a member of any Pentecostal church?</span>
        <span>{chk(form.pentecostalMember,"No")} No</span>
        <span>{chk(form.pentecostalMember,"Yes")} Yes</span>
        <Row label="Church name" value={v(form.pentecostalChurch)} />
      </div>
      <Row label="Reason to join this church" value={v(form.reasonToJoin)} />
      <div style={{ display:"flex", gap:12, marginBottom:6, fontSize:11, alignItems:"center" }}>
        <span>Have you understood the doctrine of CGI?</span>
        <span>{chk(form.understoodDoctrine,"Yes")} Yes</span>
        <span>{chk(form.understoodDoctrine,"No")} No</span>
      </div>
      <div style={{ fontSize:11, marginBottom:10, display:"flex", gap:8, flexWrap:"wrap", alignItems:"center" }}>
        <span>ID proof enclosed</span>
        {["Voter ID","Passport","Aadhaar card"].map((v2) => (
          <span key={v2}>{chk(form.idProof.includes(v2) ? v2 : "", v2)} {v2}</span>
        ))}
        <span>Others: <span style={{ borderBottom:"1px solid #555", minWidth:80, display:"inline-block", paddingLeft:4 }}>{v(form.idProofOther)}</span></span>
      </div>
      <div style={{ background:"#333", color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", height:32, fontWeight:"bold", fontSize:12, letterSpacing:2, marginBottom:12, textAlign:"center", lineHeight:"32px" }}>
        FAMILY DETAILS <em style={{ fontWeight:"normal" }}>(To be completed by the Head of the Family)</em>
      </div>
      <table style={{ width:"100%", borderCollapse:"collapse", fontSize:10, marginBottom:10 }}>
        <thead>
          <tr style={{ background:"#eee" }}>
            {["Name","Date of birth","Place of birth","Sex","Date of faith baptism","Relationship"].map((h) => (
              <th key={h} style={{ border:"1px solid #aaa", padding:"4px 6px", textAlign:"left" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {form.family.map((r, i) => (
            <tr key={i}>
              <td style={{ border:"1px solid #aaa", padding:"4px 6px" }}>{r.name}</td>
              <td style={{ border:"1px solid #aaa", padding:"4px 6px" }}>{fmtDate(r.dob)}</td>
              <td style={{ border:"1px solid #aaa", padding:"4px 6px" }}>{r.pob}</td>
              <td style={{ border:"1px solid #aaa", padding:"4px 6px" }}>{r.sex}</td>
              <td style={{ border:"1px solid #aaa", padding:"4px 6px" }}>{fmtDate(r.baptismDate)}</td>
              <td style={{ border:"1px solid #aaa", padding:"4px 6px" }}>{r.relationship}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign:"center", fontWeight:"bold", fontSize:12, marginBottom:6 }}>DECLARATION</div>
      <p style={{ fontSize:10, lineHeight:1.6, color:"#444", marginBottom:20 }}>
        I have read and understood the doctrines, policies and disciplines of CGI and I am satisfied with it and have willingly agreed to obey, cooperate and support all the church activities hereafter. If and when granted membership with the church, I promise to do my best for the furtherance of His kingdom as a good Christian soldier. My request for membership is voluntary and taken by me independently. I certify that the information given above is true to the best of my knowledge and belief.
      </p>
      <div style={{ textAlign:"right", fontSize:10, fontStyle:"italic", marginBottom:4 }}>Applicant Signature with date</div>
      <div style={{ borderTop:"1px solid #555", width:200, marginLeft:"auto", marginBottom:16 }}></div>
      <div style={{ background:"#333", color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", height:32, fontWeight:"bold", fontSize:12, letterSpacing:2, marginBottom:12, textAlign:"center", lineHeight:"32px" }}>OFFICE USE ONLY</div>
      <table style={{ width:"100%", borderCollapse:"collapse", fontSize:10 }}>
        <thead>
          <tr style={{ background:"#eee" }}>
            {["Approved by","Signature of pastor","Date","Office seal","Remarks"].map((h) => (
              <th key={h} style={{ border:"1px solid #aaa", padding:"4px 6px", textAlign:"left" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>{Array(5).fill(null).map((_,i) => <td key={i} style={{ border:"1px solid #aaa", height:30 }}></td>)}</tr>
        </tbody>
      </table>
      <div style={{ fontSize:9, color:"#888", textAlign:"center", marginTop:12 }}>Submitted: {new Date().toLocaleString()}</div>
    </div>
  );
}

// ── Reusable field components ────────────────────────────────────────────────
const Field = ({ label, children }) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{label}</label>
    {children}
  </div>
);

const TextInput = ({ value, onChange, placeholder = "" }) => (
  <input
    className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full outline-none focus:border-blue-400 bg-white"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

const DateInput = ({ value, onChange }) => (
  <input
    type="date"
    className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full outline-none focus:border-blue-400 bg-white"
    value={value}
    onChange={onChange}
  />
);

const RadioGroup = ({ options, value, onChange }) => (
  <div className="flex flex-wrap gap-4">
    {options.map((opt) => (
      <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer">
        <input
          type="checkbox"
          checked={value === opt}
          onChange={() => onChange(value === opt ? "" : opt)}
          className="w-4 h-4"
        />
        {opt}
      </label>
    ))}
  </div>
);

const SectionHeader = ({ title, subtitle }) => (
  <div className="bg-gray-800 text-white text-center py-2 text-sm font-bold tracking-widest rounded-sm">
    {title}{subtitle && <span className="font-normal italic"> {subtitle}</span>}
  </div>
);

// ── Main form ────────────────────────────────────────────────────────────────
export default function MembershipForm() {
  const toast = useToast();
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const set = (f, v) => setForm((p) => ({ ...p, [f]: v }));
  const toggleIdProof = (v) =>
    setForm((p) => ({
      ...p,
      idProof: p.idProof.includes(v) ? p.idProof.filter((x) => x !== v) : [...p.idProof, v],
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
      s.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
      s.onload = res; s.onerror = rej;
      document.head.appendChild(s);
    });

  const captureImage = async () => {
    await loadHtml2Canvas();
    const el = document.getElementById("print-view-capture");
    return await window.html2canvas(el, { scale:2, useCORS:true, backgroundColor:"#ffffff", logging:false });
  };

  const handleSubmit = async () => {
    if (!form.fullName.trim()) {
      toast({ title:"Missing required field", description:"Please enter your full name.", status:"error", duration:5000, isClosable:true, position:"top-center" });
      return;
    }
    setSubmitting(true); setStatus("pdf");
    try {
      const canvas = await captureImage();
      const imageBase64 = canvas.toDataURL("image/png");
      const date = new Date().toLocaleDateString("en-IN").replace(/\//g, "-");
      const fileName = `CGI_Membership_${form.fullName.replace(/\s+/g, "_")}_${date}.png`;

      setStatus("uploading");
      const driveRes = await fetch(APPS_SCRIPT_URL, {
        method:"POST", mode:"cors", redirect:"follow",
        headers:{ "Content-Type":"text/plain" },
        body: JSON.stringify({ image:imageBase64, fileName }),
      });
      const driveJson = await driveRes.json();
      if (!driveJson.success) throw new Error("Google Drive upload failed: " + driveJson.error);
      const { url: fileUrl, directUrl } = driveJson;

      try {
        if (window.storage?.set)
          await window.storage.set(`membership:${Date.now()}`, JSON.stringify({ ...form, submittedAt: new Date().toISOString() }));
      } catch {}

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

      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: form.fullName,
        message: msg,
        subject: `New Membership Application - ${form.fullName}`,
      }, EMAILJS_PUBLIC_KEY);

      toast({
        title: "Application Submitted!",
        description: "Thank you for submitting your membership application.",
        status: "success", duration: 7000, isClosable: true, position: "top-center",
      });
      setForm(initialState); setStatus("");
    } catch (e) {
      console.error(e);
      toast({ title:"Submission failed", description: e?.text || e?.message || "Something went wrong. Please try again.", status:"error", duration:7000, isClosable:true, position:"top-center" });
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

  return (
    <div className="min-h-screen bg-[#dae1e3] text-black">
      {/* Page Header */}
      <div className="bg-white shadow-sm mb-6 sm:mb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-blue-500 uppercase mb-1">Join the Body of Christ</p>
          <h1 className="text-3xl sm:text-4xl font-serif text-blue-900 mb-4">Church Membership</h1>
          <div className="w-16 h-1 bg-blue-400 mx-auto mb-4 rounded-full" />
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed font-semibold">
            Membership is more than a name on a list. It is a covenant commitment to walk together in faith, serve one another in love, and grow in the knowledge and grace of our Lord Jesus Christ.
          </p>
        </div>
      </div>

      {/* Hidden print view */}
      <div style={{ position:"fixed", left:-9999, top:0, zIndex:-1, pointerEvents:"none" }}>
        <div id="print-view-capture"><PrintView form={form} /></div>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto bg-white shadow-md mb-10">
        {/* Form Header */}
        <div className="text-center py-4 px-4 border-b-2 border-gray-800">
          <div className="flex items-center justify-center gap-3">
            <img src="/images/logo.jpeg" alt="CGI Logo" className="w-12 h-12 sm:w-16 sm:h-16 object-contain flex-shrink-0" />
            <div className="text-left">
              <h1 className="text-base sm:text-xl font-bold text-gray-900 leading-tight">Church of God (Full Gospel) in India</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Reg. No.: 18/1949 Under Societies Registration Act XXI / 1860</p>
              <p className="text-xs text-gray-600 hidden sm:block"># 418, 80ft Road, 6th Block, Koramangala, Bangalore - 560 095</p>
              <p className="text-xs text-gray-600 hidden sm:block">Tel.: +91 80-2552 1917 | cgikoramangala@gmail.com</p>
            </div>
          </div>
          {/* Show address on mobile below */}
          <div className="sm:hidden mt-2 text-xs text-gray-500 space-y-0.5">
            <p>Reg. No.: 18/1949 | Societies Registration Act XXI / 1860</p>
            <p># 418, 80ft Road, 6th Block, Koramangala, Bangalore - 560 095</p>
            <p>Tel.: +91 80-2552 1917 | cgikoramangala@gmail.com</p>
          </div>
        </div>

        <div className="bg-gray-800 text-white text-center py-2 text-xs sm:text-sm font-bold tracking-widest">
          MEMBERSHIP APPLICATION FORM
        </div>

        <div className="p-4 sm:p-6 space-y-5">
          {/* Intro box */}
          <div className="border border-gray-300 rounded-md p-3 text-sm space-y-1">
            <p>➤ <strong>Do you want to become a member of our church?</strong></p>
            <p>➤ <strong>Have you been praying about joining this exciting and growing ministry?</strong></p>
            <p>➤ <strong>Are you new to the area and looking to transfer your membership?</strong></p>
            <p className="text-xs text-gray-600 mt-2">If the answer is <strong>"YES"</strong> to any of these questions, please fill out the information below and drop it off at the church office.</p>
          </div>

          {/* Personal Details */}
          <div className="space-y-4">
            <Field label="Full Name (in block letters)">
              <TextInput value={form.fullName} onChange={(e) => set("fullName", e.target.value)} placeholder="Enter your full name" />
            </Field>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Name of Father">
                <TextInput value={form.fatherName} onChange={(e) => set("fatherName", e.target.value)} />
              </Field>
              <Field label="Name of Mother">
                <TextInput value={form.motherName} onChange={(e) => set("motherName", e.target.value)} />
              </Field>
            </div>

            <Field label="Present Address">
              <TextInput value={form.presentAddress} onChange={(e) => set("presentAddress", e.target.value)} />
            </Field>
            <Field label="Permanent Address">
              <TextInput value={form.permanentAddress} onChange={(e) => set("permanentAddress", e.target.value)} />
            </Field>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Date of Birth"><DateInput value={form.dob} onChange={(e) => set("dob", e.target.value)} /></Field>
              <Field label="Place of Birth"><TextInput value={form.pob} onChange={(e) => set("pob", e.target.value)} /></Field>
            </div>

            <Field label="Marital Status">
              <RadioGroup options={["Unmarried","Married"]} value={form.maritalStatus} onChange={(v) => set("maritalStatus", v)} />
            </Field>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Date of Marriage"><DateInput value={form.marriageDate} onChange={(e) => set("marriageDate", e.target.value)} /></Field>
              <Field label="Name of Spouse"><TextInput value={form.spouseName} onChange={(e) => set("spouseName", e.target.value)} /></Field>
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Baptism & Faith */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Date of Faith Baptism"><DateInput value={form.baptismDate} onChange={(e) => set("baptismDate", e.target.value)} /></Field>
              <Field label="Baptized Under Which Church"><TextInput value={form.baptismChurch} onChange={(e) => set("baptismChurch", e.target.value)} /></Field>
            </div>

            <Field label="Are you baptized in the Holy Spirit?">
              <RadioGroup options={["Yes","No"]} value={form.holySpiritBaptized} onChange={(v) => set("holySpiritBaptized", v)} />
            </Field>
            <Field label="Date of Holy Spirit Baptism"><DateInput value={form.holySpiritDate} onChange={(e) => set("holySpiritDate", e.target.value)} /></Field>
            <Field label="Date from which you are attending this church"><DateInput value={form.attendingFrom} onChange={(e) => set("attendingFrom", e.target.value)} /></Field>
          </div>

          <hr className="border-gray-200" />

          {/* Membership Transfer */}
          <div className="space-y-4">
            <Field label="Would you like to transfer your membership to this church?">
              <RadioGroup options={["Yes","No"]} value={form.transferMembership} onChange={(v) => set("transferMembership", v)} />
            </Field>
            <Field label="If yes, which church are you transferring from?">
              <TextInput value={form.transferFromChurch} onChange={(e) => set("transferFromChurch", e.target.value)} />
            </Field>

            <Field label="Were you ever a member of any Pentecostal church?">
              <RadioGroup options={["Yes","No"]} value={form.pentecostalMember} onChange={(v) => set("pentecostalMember", v)} />
            </Field>
            <Field label="If yes, church name">
              <TextInput value={form.pentecostalChurch} onChange={(e) => set("pentecostalChurch", e.target.value)} />
            </Field>

            <Field label="Reason to join this church">
              <TextInput value={form.reasonToJoin} onChange={(e) => set("reasonToJoin", e.target.value)} />
            </Field>

            <Field label="Have you understood the doctrine of CGI?">
              <RadioGroup options={["Yes","No"]} value={form.understoodDoctrine} onChange={(v) => set("understoodDoctrine", v)} />
            </Field>

            <Field label="ID Proof Enclosed">
              <div className="flex flex-wrap gap-4">
                {["Voter ID","Passport","Aadhaar card"].map((v) => (
                  <label key={v} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="checkbox" checked={form.idProof.includes(v)} onChange={() => toggleIdProof(v)} className="w-4 h-4" />
                    {v}
                  </label>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-sm text-gray-600">Others:</span>
                <input
                  className="border-b border-gray-400 outline-none text-sm px-1 flex-1 bg-transparent"
                  value={form.idProofOther}
                  onChange={(e) => set("idProofOther", e.target.value)}
                />
              </div>
            </Field>
          </div>

          {/* Family Details */}
          <div>
            <SectionHeader title="FAMILY DETAILS" subtitle="(To be completed by the Head of the Family)" />
            <div className="mt-3 space-y-3">
              {form.family.map((row, i) => (
                <div key={i} className="border border-gray-200 rounded-md p-3 space-y-2 bg-gray-50">
                  <p className="text-xs font-bold text-gray-500 uppercase">Member {i + 1}</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="col-span-2">
                      <Field label="Name"><TextInput value={row.name} onChange={(e) => setFamily(i,"name",e.target.value)} /></Field>
                    </div>
                    <Field label="Date of Birth"><DateInput value={row.dob} onChange={(e) => setFamily(i,"dob",e.target.value)} /></Field>
                    <Field label="Place of Birth"><TextInput value={row.pob} onChange={(e) => setFamily(i,"pob",e.target.value)} /></Field>
                    <Field label="Sex">
                      <select
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full outline-none focus:border-blue-400 bg-white"
                        value={row.sex}
                        onChange={(e) => setFamily(i,"sex",e.target.value)}
                      >
                        <option value=""></option>
                        <option>M</option>
                        <option>F</option>
                      </select>
                    </Field>
                    <Field label="Date of Faith Baptism"><DateInput value={row.baptismDate} onChange={(e) => setFamily(i,"baptismDate",e.target.value)} /></Field>
                    <div className="col-span-2">
                      <Field label="Relationship"><TextInput value={row.relationship} onChange={(e) => setFamily(i,"relationship",e.target.value)} /></Field>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Declaration */}
          <div className="border border-gray-200 rounded-md p-4 bg-gray-50">
            <p className="text-center font-bold text-sm mb-3 tracking-wide">DECLARATION</p>
            <p className="text-xs text-gray-700 leading-relaxed">
              I have read and understood the doctrines, policies and disciplines of CGI and I am satisfied with it and have willingly agreed to obey, cooperate and support all the church activities hereafter. If and when granted membership with the church, I promise to do my best for the furtherance of His kingdom as a good Christian soldier. My request for membership is voluntary and taken by me independently. I certify that the information given above is true to the best of my knowledge and belief.
            </p>
            <div className="mt-4 flex justify-end">
              <div className="text-right">
                <div className="border-t border-gray-400 w-48 mb-1"></div>
                <p className="text-xs italic text-gray-500">Applicant Signature with date</p>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-center mt-2">
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="w-48 bg-purple-500 hover:bg-purple-600 disabled:opacity-70 text-white px-3 py-2.5 rounded-lg text-base font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              {submitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Submitting...
                </span>
              ) : "SUBMIT"}
            </button>
          </div>

          {/* Office Use Only */}
          <div className="mt-4">
            <SectionHeader title="OFFICE USE ONLY" />
            {/* Desktop table */}
            <table className="w-full border-collapse text-xs hidden sm:table">
              <thead>
                <tr className="bg-gray-100">
                  {["Approved by","Signature of pastor","Date","Office seal","Remarks"].map((h) => (
                    <th key={h} className="border border-gray-400 px-2 py-1.5 font-bold text-left">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>{Array(5).fill(null).map((_,i) => <td key={i} className="border border-gray-400 h-10"></td>)}</tr>
              </tbody>
            </table>
            {/* Mobile stacked */}
            <div className="sm:hidden border border-gray-300 rounded-md mt-2">
              {["Approved by","Signature of pastor","Date","Office seal","Remarks"].map((h) => (
                <div key={h} className="flex border-b last:border-b-0 border-gray-200">
                  <span className="text-xs font-bold text-gray-600 p-2 w-36 border-r border-gray-200 bg-gray-50">{h}</span>
                  <span className="flex-1 p-2"></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}