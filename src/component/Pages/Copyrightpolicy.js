import React, { useEffect } from "react";
import { AiFillPlayCircle } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { add } from "../../store/Track/trackUserSlice";

const Copyrightpolicy = () => {
  const disptach = useDispatch();
  useEffect(() => {
    disptach(add({ view: ["Copyrightpolicy"] }));
  }, []);
  return (
    <>
      <div
        className="page-title page-title--small align-left  hidden-sm hidden-xs visible-md-block visible-lg-block"
        style={{
          background: "linear-gradient(rgb(43, 88, 118), rgb(78, 67, 118))",
          marginBottom: "0px",
        }}
      >
        <div className="container">
          <div className="page-title__content">
            <center>
              <h2 className="page-title__name text-white">Copyright Policy</h2>
            </center>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="text-center">
          <b>Intellectual property rights infringement claims</b>
        </div>
        <ul>
          <li className="p-2">
            RotateKey Classifieds India Pvt Ltd ('RotateKey') respects the Intellectual
            Property Rights, including but not limited to patent, copyright,
            design, trademark, service mark, trade names, data and media
            (images, illustrations, audio clips, and video clips, among others)
            ("IP") of others, and prohibits users from uploading, posting,
            distributing or otherwise transmitting any materials on the
            Platform, or engaging in any activities on the Platform, which
            violate the copyrights of others.
          </li>
          <li className="p-2">
            Any and all IP that in any manner forms part of and / or belongs to
            and / or associated with the Platform, shall vest in and exclusively
            belong to RotateKey. All other IP on this Platform belongs to their
            respective owners.
          </li>
          <li className="p-2">
            IP on this Platform is solely for your personal and non-commercial
            use. Any use of the IP for which you receive any remuneration,
            whether in money or otherwise would be considered to be a commercial
            use. Further, use of IP in any manner without the prior consent of
            the respective owner or RotateKey is prohibited and the same would be
            considered to be a violation of the Intellectual Property Rights of
            RotateKey or of the respective owner. Such violation can lead to
            termination of your account on this Platform. RotateKey further reserve
            its right to take appropriate legal actions against such violation
            of its IP rights.
          </li>
        </ul>

        <div className="mx-5">
          <b>Takedown notice</b>
        </div>
        <ul>
          <li className="p-2 fs-14">
            <AiFillPlayCircle className="text-danger" /> Pursuant to Rule 75(1)
            of the Copyright Rules, 2013 and other applicable enactments
            /amendments thereto, in order to report any material / work on the
            Platform that violates the copyrights of others, you must send RotateKey
            a written communication that includes substantially the following:
          </li>
          <li className="p-2 fs-14">
            <AiFillPlayCircle className="text-danger" /> The description of the
            work with the adequate information to identify the work
          </li>
          <li className="p-2 fs-14">
            <AiFillPlayCircle className="text-danger" /> Details establishing
            that the complainant is the owner or exclusive licensee of copyright
            in the work.
          </li>
          <li className="p-2 fs-14">
            <AiFillPlayCircle className="text-danger" /> Details establishing
            that the copy of the work which is the subject matter of transient
            or incidental storage is an infringing copy of the work owned by the
            complainant and that the allegedly infringing act is not covered
            under section 52 or any other act that is permitted under the
            Copyright Act 1957.
          </li>
          <li className="p-2 fs-14">
            <AiFillPlayCircle className="text-danger" /> Details of the location
            where transient or incidental storage of the work is taking place.
          </li>
          <li className="p-2 fs-14">
            <AiFillPlayCircle className="text-danger" /> Details of the person,
            if known, who is responsible for uploading the work infringing the
            copyright the copyright of the complaint.
          </li>
          <li className="p-2 fs-14">
            <AiFillPlayCircle className="text-danger" /> Undertaking that the
            complainant shall file an infringement suit in the competent court
            against the person responsible for uploading the infringing copy and
            produce orders of the competent court having jurisdiction, within a
            period of twenty-one days from the date of receipt of the notice. In
            so far as any of these notices are concerned, the final
            determination of the same shall vest in RotateKey.
          </li>
        </ul>

        <div className="text-center">RotateKey's copyright administrator</div>
        <ul>
          <li className="p-2">
            The foregoing written communications (i.e., the above-described
            takedown notice) must be sent to the following agent of RotateKey:
          </li>
          <li className="p-2">The Copyright Administrator</li>
          <li className="p-2">RotateKey Classifieds India Pvt Ltd.</li>
          <li className="p-2">
            # 12, Second Floor,3rd Cross Patel Narayana Reddy
          </li>
          <li className="p-2">
            Layout 6th Block Koramangala, Bnagalore-560095
          </li>
          <li className="p-2">E-mail : legal@RotateKey.com</li>
        </ul>

        <div className="text-center">Disclaimers</div>
        <ul>
          <li className="p-2">
            RotateKey suggests that you consult with your Advocate before you file
            any of the foregoing written communications (i.e., the
            above-described takedown notices, and the above-described
            counter-notice). Any person who knowingly materially misrepresents
            that material found on the Platform is infringing, or that material
            was removed from the Platform by mistake or misidentification, may
            expose himself / herself to liability.
          </li>
          <li className="p-2">
            RotateKey understands that not everyone is a copyright expert, and that
            accidents can happen. However, RotateKey has zero tolerance for willful
            and repeat copyright infringers. Therefore, pursuant to a complaint,
            if RotateKey determines in its sole discretion that you have willfully
            violated the copyrights of others or that you have repeatedly
            violated the copyrights of others despite prior warning(s), RotateKey
            will cancel your account and prohibit you from further accessing and
            using the Platform. By accessing or using the Platform, you
            automatically acknowledge and agree that RotateKey has the right to
            cancel your account and prohibit you from further accessing and
            using the Platform, and your continuing access or use of the
            Platform reaffirms your acknowledgment and agreement in each
            instance.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Copyrightpolicy;
