import React, { useEffect } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import {
  BsChevronDoubleRight,
  BsStopCircle,
  BsFillXDiamondFill,
  BsArrowRightCircleFill,
} from "react-icons/bs";

const Pri = () => {
  return (
    <div>
      <div
        className="page-title page-title--small align-left  hidden-sm hidden-xs visible-md-block visible-lg-block"
        style={{
          background: "linear-gradient(rgb(43, 88, 118), rgb(78, 67, 118))",
        }}
      >
        <div className="container">
          <div className="page-title__content">
            <center>
              <h2 className="page-title__name text-white">Privacy Policy</h2>
            </center>
          </div>
        </div>
      </div>
      <ul>
        <li className="p-2">
          This privacy statement applies to your use of any products, services,
          content, features, technologies, or functions, and all related
          websites, mobile apps, mobile sites or other online platform or
          applications offered to you by us (collectively the
          "Services/Platform"). We collect, use, and share personal information
          to help the RotateKey’s and its affiliate websites work and to keep it
          safe (details below).
        </li>
        <li className="p-2">
          Information posted on RotateKey’s is obviously publicly available. Our
          servers are located in Bangalore, India. Therefore, if you choose to
          provide us with personal information, you are consenting to the
          transfer and storage of that information on our servers.
        </li>
      </ul>

      <div className="mx-5 fs-18 text-black">
        <b>(1). What data do we collect about you?</b>
      </div>
      <ul>
        <li className="p-2 fs-16 text-black">
          <BsChevronDoubleRight />{" "}
          <b>Data provided through direct interactions</b>
        </li>
        <li className="p-2 fs-16 text-black">
          <BsFillXDiamondFill />{" "}
          <b> Registration and other account information</b>
        </li>

        <li className="p-2 fs-16">
          When you register to use our Services, we may collect the following
          information about you:
        </li>
        <li className="p-2 fs-14">
          <BsStopCircle className="text-danger" /> If you register using your
          Google account: first name, last name and email address
          <br />
          <BsStopCircle className="text-danger" /> If you register using your
          mobile number, we collect your mobile number
          <br />
          <BsStopCircle className="text-danger" /> If you register using your
          email id we collect your email id
          <br />
          <BsStopCircle className="text-danger" /> We also collect your primary
          email id used to download the application from the app store
        </li>

        <li className="p-2 fs-18 text-black">
          Depending on the choices you make during the log-in to our Services or
          during the process of engaging our Services, you may opt to give the
          following additional personal data:
        </li>
        <li className="p-2 fs-14">
          <BsStopCircle className="text-danger" /> Your Name
          <br />
          <BsStopCircle className="text-danger" /> E-mail Address
          <br />
          <BsStopCircle className="text-danger" /> Mobile number
          <br />
          <BsStopCircle className="text-danger" /> Your credit card/debit card
          details in case you choose to purchase our paid services store
        </li>

        <li className="p-2 fs-16 text-black">
          <BsFillXDiamondFill /> <b> Validation of your account</b>
        </li>
        <li className="p-2 fs-16 text-black">
          We validate the accounts of RotateKey’s users by using SMS verification to
          ensure that each account is associated with a real and unique user.
          This validation process is initiated once you proceed with posting an
          ad listing, take an action on an ad listing or initiate a purchase. In
          order to validate your account, we will send you an SMS on a valid
          mobile number provided by you. This process is entirely free of
          charge.
          <br />
          <br />
          If you do not agree to validate your account, then your account will
          remain active and you will be able to use our Services with limited
          functionality. This limited functionality of an account implies that
          you cannot publish new ad listings or edit, update, promote, extend,
          reactivate, deactivate or delete existing ad listings until your
          account is verified by SMS. You will also not be able to receive or
          reply to any messages from other users.
          <br />
          <br />
          In case you create several accounts using the same mobile number and
          validate all those accounts via SMS verification, all such accounts
          will have a limited functionality and you will be asked to choose one
          of them. The account chosen by you will return to full functionality,
          and the rest of the accounts will remain to have limited
          functionality.
          <br />
          <br />
          Once you have validated your account, it will remain associated with
          the mobile number used for the SMS verification. If you wish to change
          the mobile number associated with your account, you will need to
          contact our Customer Support team.
        </li>

        <li className="p-2 fs-16 text-black">
          <BsFillXDiamondFill />{" "}
          <b> Communication through the chat feature on our Platform</b>
        </li>
        <li className="p-2 fs-16 text-black">
          When you use our chat feature to communicate with other users, we
          collect information that you choose to provide to other users through
          this feature.
        </li>

        <li className="p-2 fs-16 text-black">
          <BsChevronDoubleRight />{" "}
          <b>Data we collect automatically when you use of our Services.</b>
        </li>
        <li className="p-2 fs-16 text-black">
          When you interact with our Services, we automatically collect the
          following information about you:
          <br />
          We collect device-specific information such as operating system
          version, unique identifiers, IMEI number, and standard web log
          information. For example, the name of the mobile network that you are
          using. We associate the device identifiers with your account.
        </li>
        <li className="p-2 fs-16 text-black">
          <BsFillXDiamondFill /> <b> Device Information</b>
        </li>
        <li className="p-2 fs-16 text-black">
          We may require access to other apps installed on the device, to
          enhance your experience. You may choose not to grant access to such
          apps, which will allow you access to use our services, but with
          limited functionality
        </li>
        <li className="p-2 fs-16 text-black">
          <BsFillXDiamondFill /> <b> Location information</b>
        </li>
        <li className="p-2 fs-16 text-black">
          Depending on your device permissions, if you post an item on our
          Platform, we automatically collect and process information about your
          actual location. We use various technologies to determine location,
          including IP address, GPS, Wi-Fi access points and mobile towers. Your
          location data allows you to see user items near you and helps you in
          posting items within your location. In case we need your location
          data, we will first show you a pop-up which will ask you to choose to
          allow or not to allow us to access your location data. If you do not
          allow us to have access to your location data, you will still be able
          to use our Services but with limited functionality. If you do allow us
          to access your location data you can always change this later by going
          to the settings on our Website or App our Platform and disable the
          permissions related to location sharing.
        </li>
        <li className="p-2 fs-16 text-black">
          <BsFillXDiamondFill /> <b> Client and Log data</b>
        </li>
        <li className="p-2 fs-16 text-black">
          Technical details, including the Internet Protocol (IP) address of
          your device, time zone and operating system. We will also store your
          login information (registration date, date of last password change,
          date of the last successful login), type and version of your browser.
        </li>
        <li className="p-2 fs-16 text-black">
          <BsFillXDiamondFill /> <b> Clickstream data</b>
          <br />
          <p>
            We collect information about your activity on our Platform, which
            includes
          </p>
        </li>
        <li className="p-2 fs-16 text-black">
          <BsStopCircle /> The sites from which you accessed our Platform, date
          and time stamp of each visit, searches you have performed, listings or
          advertisement banners you clicked, your interaction with such
          advertisements or listings, duration of your visit and the order in
          which you visit the content on our Platform.
          <br></br>
          <BsStopCircle /> Computer sign-on data, statistics on page views,
          traffic to and from RotateKey’s and Ad data (all through cookies – you can
          take steps to disable the cookies on your browser although this is
          likely to affect your ability to use the site), Google advertising Id
          on Android App which is a unique, user-resettable ID for advertising,
          provided by Google Play services.
        </li>

        <li className="p-2 fs-16 text-black">
          <BsFillXDiamondFill /> <b> Cookies and Similar Technologies</b>
          <p>
            We use cookies to manage our users’ sessions, to store your
            preference language selection and deliver you relevant
            advertisements. "Cookies" are small text files transferred from a
            web server to the hard drive of your device. Cookies may be used to
            collect the date and time of your visit, your browsing history, your
            preferences, and your username. You can set your browser to refuse
            all or some cookies, or to alert you when websites set or access
            cookies. If you disable or refuse cookies, please note that some
            parts of our Services/Platform may become inaccessible or not
            function properly
          </p>
        </li>

        <li className="p-2 fs-16 text-black">
          <b>(2) .Why do we process your personal information?</b>
          <p>
            We will only use your personal data when the law allows us to. Most
            commonly, we will use your personal data in the following
            circumstances:
          </p>
        </li>
        <li className="p-2 fs-16 text-black">
          <BsStopCircle /> Where we need to perform the contract we are about to
          enter into or have entered into with you.
          <br />
          <BsStopCircle /> Where we share information with our business partners
          for our business needs.
          <br />
          <BsStopCircle /> Where it is necessary for our legitimate interests to
          improve our Services and to provide you a safe and secure Platform.
          <br />
          <BsStopCircle /> Where we need to comply with a legal or regulatory
          obligation.
          <br />
          <br />
          <p>
            In certain circumstances, we may also process your personal data
            based on your consent. If we do this, we will let you know the
            purpose and the category of personal data to be processed at the
            time we seek your consent.
            <br />
            We have set out below a description of the reasons for which we use
            your personal data, [and which of the legal bases we rely on to do
            so. We have also identified what our legitimate interests are, where
            appropriate].
          </p>
        </li>
        <li className="p-2 fs-16 text-black">
          <BsChevronDoubleRight />{" "}
          <b>
            For providing access and delivering Services through our Platform
          </b>
        </li>
        <li className="p-2 fs-16 text-black">
          <BsFillXDiamondFill /> If you log in using your mobile number or email
          id, we use your first name and last name, mobile number and/or e-mail
          address to identify you as a user and provide access to our Platform.
          <br />
          <BsFillXDiamondFill /> If you log in using your google account we use
          your first name and last name and your email address of such account,
          as well as the URL to your profile picture (except for Apple ID and
          True caller) we use your first name and last name from Google account
          to identify you as a user on our Platform and to provide you access to
          our Platform
          <br />
          <BsFillXDiamondFill /> We use third party payment service providers to
          process any payment you make to our Services. Depending on the method
          of payment, you may be requested to provide us with your payment and
          credit card details, which we will then provide to the payment service
          provider in order to process your payment. We do not store your credit
          card information, unless you choose the option to save such
          information in order to make recurring payments easier without having
          to re-enter your details each time. In such cases, we only store your
          cardholder name, the card expiry date, your card type and the last
          four digits of the card number. We do not store any credit card code
          verification values and merely forward such values and your credit
          card number in an encrypted manner for processing your payment by our
          payment service provider.
        </li>
        <p>
          We process the above information for adequate performance of our
          contract with you.
        </p>
        <li className="p-2 fs-16 text-black">
          <BsFillXDiamondFill /> RotateKey’s accesses metadata and other information
          associated with other files stored on your mobile device. This will
          include photographs, audio and video clips, personal contacts and
          address book information. If you permit RotateKey to access the address
          book on your device, we may collect names, contact information from
          your address book, and share the same with telecom Companies for
          promotional activities and to facilitate social interactions through
          our services and for other purposes described in this Policy or at the
          time of consent or collection. We take reasonable efforts to ensure
          that third parties adhere to our Privacy policies, rules and
          guidelines
          <br />
          <BsFillXDiamondFill /> All the information we receive about you are
          stored on secure servers and we have implemented technical and
          organizational measures that are necessary to protect your personal
          data.
        </li>
        <li className="p-2 fs-16 text-black">
          <BsChevronDoubleRight />{" "}
          <b>
            For improving your experience on the Platform and developing new
            functionalities of the Platform
          </b>
        </li>
        <li className="p-2 fs-16 text-black">
          <BsFillXDiamondFill /> <b> We use clickstream data to:</b>
        </li>
        <li className="p-2 fs-16 text-black">
          <BsStopCircle /> Offer you tailored content, such as giving you more
          relevant search results when using our Services.
          <br />
          To determine how much time you spend on our Platform and in what
          manner you navigate through our Platform in order to understand your
          interests and to improve our Services based on this data. For example,
          we may provide you with suggestions on content that you can visit
          based on the contents you have clicked.
          <br /> To communicate marketing and promotional offers, to monitor and
          report the effectiveness of the campaign delivery to our business
          partners and internal business analysis.
        </li>
        <li className="p-2 fs-16 text-black">
          <BsFillXDiamondFill />{" "}
          <b>
            If you choose to provide us with your location data, we use your
            location data for following purposes:
          </b>
        </li>
        <li className="p-2 fs-16 text-black">
          <BsStopCircle /> To compile anonymous and aggregated information about
          the characteristics and behavior of users, including for the purposes
          of business analysis, segmentation and development of anonymous
          profiles.
          <br /> <BsStopCircle /> To enhance the performance of our Services and
          to personalize the content we direct towards you. For example - with
          the help of location data we display ad listings which are in your
          vicinity to improve your buying experience. For this purpose, Google
          Maps is integrated into our Platform. This means that both Google and
          we are responsible for the processing of your location data in the
          context of Google Maps. In any case, we will not process your location
          data for any other purposes but those explained in this Privacy
          Statement. However, Google might process such location data for their
          own purposes as explained in the Google Privacy Policy, which can be,
          reviewed Your use of Google Maps through our Platform is subject to
          Google Maps’ Terms of Service.
          <br />
          <BsStopCircle /> To measure and monitor your interaction with the
          third-party advertisement banners, we place on our Platform.
          <br />
          <BsFillXDiamondFill /> With the help of your account information,
          which includes your email ID and phone number, we map the different
          devices (such as desktop, mobile, tablets) used by you to access our
          Platform. This allows us to associate your activity on our Platform
          across devices and helps us in providing you a seamless experience no
          matter which device you use.
          <br />
          <BsFillXDiamondFill /> We use the images you upload, the descriptions
          and prices you provide in your ad listings to train machine-learning
          models to personalize search results in relation to ad ranking and
          user interest, to improve the identification and presentation of ad
          listings, to improve the search function and to increase the
          likelihood of a successful sale. This helps us to improve our Services
          and to provide you with a better user experience.
          <br />
          <BsFillXDiamondFill /> To show and recommend ad listings on our
          Services that may be of interest to you, we make use of algorithms
          that use information related to your browsing behavior, items you
          bought, clickstream data, your user ID and your location data if you
          have given us permission to use this. We use this form of automated
          decision-making on the basis of our legitimate interest in improving
          our Services and provide a better user experience by offering you more
          relevant ad listings. We access and analyze your chat messages with
          other users conducted through the chat function on our Platform, for
          product enhancement and to provide you with a better user experience
          (e.g. to identify sold items and to provide you with active listings
          only). Therefore, we develop and train machine learning models and
          algorithms to automatically analyze your chat content. To build and
          train our machine learning models our machine learning specialists may
          review exemplary chat content manually. In these circumstances, highly
          restricted access rights apply to selected machine learning
          specialists analyzing the chat c<br />
          <BsFillXDiamondFill /> Content. During this process, we are
          de-identifying chat content as much as possible by applying a scanning
          filter to detect and hide personal data such as names, phone numbers,
          e-mail addresses. However, there may still be cases beyond our control
          in which the chat content may show certain personal data that you have
          chosen to provide.
          <br />
          <BsFillXDiamondFill /> We process the above information for adequate
          performance of our contract with you and on the basis of our
          legitimate interest to improve your experience of our Services.
        </li>
        <li className="p-2 fs-16 text-black">
          <BsChevronDoubleRight />{" "}
          <b>
            To take your feedback, promote and offer you Services that may be of
            your interest
          </b>
        </li>
        <li className="p-2 fs-16 text-black">
          <BsFillXDiamondFill /> We may contact you through your registered
          mobile number or email id in order to take feedback from you about our
          Services.
          <br />
          <BsFillXDiamondFill /> We use your email address and mobile number (by
          SMS) to make suggestions and recommendations to you about our Services
          that may be of interest to you.
          <br />
          <BsFillXDiamondFill /> We use clickstream data to monitor and report
          the effectiveness of the campaign delivery to our business partners
          and internal business analysis.
          <br />
          <BsFillXDiamondFill /> If you choose to provide us with your location
          data, we may use your location data to measure and monitor your
          interaction with the third-party advertisement banners we place on our
          Services.
        </li>

        <p>
          We process the above information based on our legitimate interest in
          undertaking marketing activities to offer you Services that may be of
          your interest. Specifically, you may receive certain marketing
          communications from our business partners or us:
        </p>
        <li className="p-2 fs-16 text-black">
          <BsStopCircle /> By any preferred means of communication if you have
          requested such information from us.
          <br />
          <BsStopCircle /> By email or phone, regarding similar products and
          services, if you already use our Services or acquired some of our
          products.
          <br />
          <BsStopCircle /> By phone or email, if you provided us with your
          details when you entered a competition.
          <br />
          <BsStopCircle /> By phone or email if you registered for a promotion.
          <br />
          <BsStopCircle /> By phone or email, if you have provided your feedback
          for our Services through our Platform, social media, or any other
          means.
        </li>
        <p>
          Being a registered user on our Platform, please note that if you have
          registered yourself on DND/DNC/NCPR services, you will still receive
          the above communications.
          <br />
          <br />
          You can ask us to stop sending you such marketing communication at any
          time by clicking on the opt-out link in the email sent to you or by
          changing your notification settings in your account or by stating our
          calling agent that you do not wish to be contacted for the above
          marketing communications.
          <br />
          <br />
          You agree to receive an email atleast once a year informing you, that
          in case of non-compliance with the Information Technology
          (Intermediaries Guidelines) Rules, 2011, these terms, policies, RotateKey
          has the right to terminate access or usage rights of users immediately
          or remove non-compliant information, or both.
        </p>
        <li className="p-2 fs-16 text-black">
          <b>
            iii). How will we inform you about changes in our privacy statement?
          </b>
        </li>
        <li className="p-2 fs-16 text-black">
          General. We may update, upgrade, modify (partially &/or fully) this
          policy at any time, with updates taking effect when you next post or
          after 30 days, whichever is sooner. If we or our corporate affiliates
          are involved in a merger or acquisition, we may share personal
          information with another company, but this policy will continue to
          apply. Send questions about this policy to support@RotateKey.com
          <br />
          <br />
          You will also receive an e-mail once a year notifying you of any
          change to this Policy.
        </li>
        <li className="p-2 fs-16 text-black">
          <b>iv). Communication</b>
          <br />
          <br />
          We will communicate with you by email, SMS or in the app notification
          in connection with our Services/Platform to confirm your registration,
          to inform you in case your ad listing has become live/expired and
          other transactional messages in relation to our Services. As it is
          imperative for us to provide you such transactional messages, you may
          not be able to opt -out of such messages
        </li>
        <li className="p-2 fs-16 text-black">
          <b>v). who do we share your data with?</b>
          <p>
            We may have to share your personal data with the parties set out
            below for the purposes set out in section 2 above
          </p>
        </li>

        <li className="p-2 fs-16 text-black">
          <BsArrowRightCircleFill /> Corporate affiliates: We may share your
          data with our group companies, which are located within as well as
          outside India and help us in providing business operation services
          such as product enhancements, customer support and fraud detection
          mechanism who help detect or prevent potentially illegal acts and
          provide joint services (Our corporate affiliates will market only to
          users who ask them to)
          <br />
          <BsArrowRightCircleFill /> Third Party Service Providers: We use third
          party service providers to help us deliver certain aspect of our
          Services for example, cloud storage facilities. We conduct checks on
          our third-party service providers and require them to respect the
          security of your personal data and to treat it in accordance with the
          law. We do not allow them to use your personal data for their own
          purposes and only permit them to process your personal data for
          specified purposes and in accordance with our instructions.
          <br />
          <BsArrowRightCircleFill /> Advertising and analytics providers: In
          order to improve our Services, we will sometimes share your
          non-identifiable information with analytics providers that help us
          analyze how people are using our Platform/Service. We, share your
          information with them in non-identifiable form for monitoring and
          reporting the effectiveness of the campaign delivery to our business
          partners and for internal business analysis.
          <br />
          <BsArrowRightCircleFill /> Law enforcement authorities, regulators and
          others: We may disclose your personal data to law enforcement
          authorities, regulators, governmental or public bodies and other
          relevant third parties comply with any legal or regulatory
          requirements. We also reserve the right to make use of the personal
          information in any investigation or judicial process relating to fraud
          because of such transactions during the period RotateKey retains such
          information. We may also disclose personal information to enforce our
          policies, respond to claims that a posting or other content violates
          other’s rights, or protects anyone’s rights, property or safety.
          <br />
          <BsArrowRightCircleFill /> We may choose to sell, transfer, or merge
          parts of our business or our assets. Alternatively, we may seek to
          acquire other businesses or merge with them. If a change happens to
          our business, then the new owners may use your personal data in the
          same way as set out in this privacy statement.
          <br />
          <BsArrowRightCircleFill /> Access, Modification, and Deletion - You
          can see, modify or erase your personal information by reviewing your
          posting or account status page. Contact customer support at
          support@RotateKey.com to review any personal information we store that is
          not available on RotateKey. There may be a charge associated with such
          requests but these will not exceed the amounts permitted by law..
        </li>

        <li className="p-2 fs-16 text-black">
          <b>vi). Where do we store your data and for how long?</b>
          <br />
          <br />
          The data we collect about you will be stored and processed in secure
          servers in order to provide the best possible user experience. For
          example – for fast website or mobile application build up.
          <br />
          We will only retain your personal data for as long as necessary to
          fulfil the purposes we collected it for, including for the purposes of
          satisfying any legal, accounting, or reporting requirements. We delete
          personal information when we no longer need it for the purposes we
          described earlier. We retain personal information as permitted by law
          to resolve disputes, enforce our policies; and prevent bad people from
          coming back.
          <br />
          <br />
          To determine the appropriate retention period for personal data, we
          consider the amount, nature, and sensitivity of the personal data, the
          potential risk of harm from unauthorized use or disclosure of your
          personal data, the purposes for which we process your personal data
          and whether we can achieve those purposes through other means, and the
          applicable legal requirements.
          <br />
          In accordance with the Information Technology (Intermediary Guidelines
          and Digital Media Ethics Code) Rules, 2021, we shall retain your
          information for a period of 180 days or a longer period if required by
          the court or authorized government agencies after withdrawal or
          cancellation of your registration.
        </li>
        <li className="p-2 fs-16 text-black">
          <b>
            vii). Technical and organizational measures and processing security
          </b>
          <br />
          <br />
          All the information we receive about you are stored on secure servers
          and we have implemented technical and organizational measures that are
          suitable and necessary to protect your personal data (encryption,
          passwords, physical security)), in accordance with the Information
          Technology (Reasonable Security Practices and Procedures and Sensitive
          Personal Information Rules), 2011.
          <br />
          <br />
          RotateKey continually evaluates the security of its network and adequacy
          of its internal information security program, which is designed to (a)
          help secure your data against accidental or unlawful loss, access or
          disclosure, (b) identify reasonably foreseeable risks to the security
          of the network, and (c) minimize security risks, including through
          risk assessment and regular testing. In addition, we ensure that all
          payment data are encrypted using SSL technology
          <br />
          <br />
          Unfortunately, no data transmission over the internet can be
          guaranteed to be completely secure. So while we strive to protect such
          information, we cannot ensure or warrant the security of any
          information you transmit to us and you do so at your own risk. Once
          any personal information comes into our possession, we will take
          reasonable steps to protect that information from misuse and loss and
          from unauthorized access, modification or disclosure
        </li>
        <li className="p-2 fs-16 text-black">
          <b>Viii). Links to third-party websites</b>
          <br />
          <br />
          Our Platform may contain links to third party websites or apps. If you
          click on one of these links, please note that each one will have its
          own privacy policy. We do not control these websites/apps and are not
          responsible for those policies. When you leave our Platform, we
          encourage you to read the privacy notice of every website you visit
          <br />
          <br />
          If you have any queries relating to the processing/ usage of
          information provided by you or RotateKey’s Privacy Policy, you may email
          at mail id or write to us at support@RotateKey.com
          <br />
          <br />
          For Users residing in any other part of world:
          <br />
          <br />
          <b>
            Legal Department, RotateKey Classifieds India Private Limited, No.12,
            Second Floor 3rd Cross Patel Narayana Reddy Layout 6<sup>th</sup>{" "}
            Block Koramangala, Bangalore- 560095
            <br />
            <br />
            Contact address
          </b>
          <br />
          No.12, Second Floor 3rd Cross Patel Narayana Reddy Layout 6th Block
          Koramangala, Bangalore 560095
        </li>
      </ul>
    </div>
  );
};

export default Pri;
