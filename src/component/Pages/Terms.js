import React, { useEffect } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import {
  BsChevronDoubleRight,
  BsStopCircle,
  BsFillStopCircleFill,
  BsFillXDiamondFill,
  BsArrowRightCircleFill,
  BsBrightnessHighFill,
  BsStopCircleFill,
} from "react-icons/bs";
import { useDispatch } from "react-redux";
import { add } from "../../store/Track/trackUserSlice";

const Terms = () => {
  const disptach = useDispatch();
  useEffect(() => {
    disptach(add({ view: ["Terms"] }));
  }, []);
  return (
    <>
      <div
        className="page-title page-title--small align-left  hidden-sm hidden-xs visible-md-block visible-lg-block"
        style={{
          background: "linear-gradient(rgb(43, 88, 118), rgb(78, 67, 118))",
        }}
      >
        <div className="container">
          <div className="page-title__content">
            <center>
              <h2 className="page-title__name text-white">
                Terms & Conditions
              </h2>
            </center>
          </div>
        </div>
      </div>
      <ul>
        <li className="p-2 fs-16 text-black">
          {" "}
          <b>(1). Introduction.</b>
        </li>
        <li className="p-2 fs-16 text-black">
          <BsFillXDiamondFill />{" "}
          <b>
            {" "}
            Welcome to www.RotateKey.com ("RotateKey / Site") operated by RotateKey
            Classifieds India Private Limited (with its registered address at
            No. 12,Second Floor ,3rd Cross Patel Narayana Reddy Layout 6th Block
            Koramangala Bengaluru- 560095). These are the terms and conditions
            governing your use of the Site ("herein after referred to as
            Acceptable Use Policy "AUP"). By accessing RotateKey either through the
            website or any other electronic device, you acknowledge, accept and
            agree to the following terms of the AUP, which are designed to make
            sure that RotateKey works for everyone. This AUP is effective from the
            time you log in to RotateKey. By accepting this AUP, you are also
            accepting and agreeing to be bound by the Privacy Policy and the
            Listing Policy.
          </b>
        </li>
        <li className="p-2 fs-16 text-black">
          {" "}
          <b>(1). 1. Using RotateKey.</b>
        </li>
        <li className="p-2 fs-16 text-black">
          <BsFillXDiamondFill /> You agree and understand that www.RotateKey.com is
          an internet enabled electronic platform that facilitates communication
          for the purposes of advertising and distributing information
          pertaining to goods and/ or services. You further agree and understand
          that we do not endorse, market or promote any of the listings,
          postings or information, nor do we at any point in time come into
          possession of or engage in the distribution of any of the goods and/
          or services, you have posted, listed or provided information about on
          our site. While interacting with other users on our site, with respect
          to any listing, posting or information we strongly encourage you to
          exercise reasonable diligence as you would in traditional off line
          channels and practice judgment and common sense before committing to
          or complete intended sale, purchase of any goods or services or
          exchange of information. We recommend that you read our Safety Tips
          before doing any activity on our site. While making use of RotateKey
          classifieds and other services such as the discussion forums, comments
          and feedback, you will post in the appropriate category or area and
          you agree that your use of the Site shall be strictly governed by this
          AUP including the policy for listing of your Classified which shall
          not violate the prohibited and restricted items policy (herein after
          referred to as the Listing Policy.)
          <br />
          <br />
          <b>
            " Your Information" is defined as any information you provide to us
            or other users of the Site during the registration, posting, listing
            or replying process of classifieds, in the feedback area (if any),
            through the discussion forums or in the course of using any other
            feature of the Services. You agree that you are the lawful owner
            having all rights, title and interest in your information, and
            further agree that you are solely responsible and accountable for
            Your Information and that we act as a mere platform for your online
            distribution and publication of Your Information.
          </b>
          <br />
          <br />
          <b>
            <BsStopCircleFill /> You agree that your listing, posting and / or
            Information :
          </b>
          <br />
          <b>
            <BsBrightnessHighFill /> shall “not be fraudulent, misrepresent,
            mislead or pertain to the sale of any illegal, counterfeit, stolen
            goods and / or services.
            <br />
            <BsBrightnessHighFill /> shall not pertain to good , services of
            which you are not the lawful owner or you do not have the authority
            or consent to 'list' which do not belong to you or you do not have
            the authority for
            <br />
            <BsBrightnessHighFill /> Shall not belong to another person and to
            which the user does not have any right;
            <br />
            <BsBrightnessHighFill /> Shall not be defamatory, obscene,
            pornographic, pedophilic, invasive of another‘s privacy, including
            bodily privacy, insulting or harassing on the basis of gender,
            libelous, racially or ethnically objectionable, relating or
            encouraging money laundering or gambling, or otherwise inconsistent
            with or contrary to the laws in force;
            <br />
            <BsBrightnessHighFill /> Shall not be harmful to children;
            <br />
            <BsBrightnessHighFill /> Shall not infringe any patent, trademark,
            copyright or other proprietary rights;
            <br />
            <BsBrightnessHighFill /> Shall not violate any law for the time
            being in force;
            <br />
            <BsBrightnessHighFill /> Shall not deceive or mislead the addressee
            about the origin of the message or knowingly and intentionally
            communicates any information which is patently false or misleading
            in nature but may reasonably be perceived as a fact;
            <br />
            <BsBrightnessHighFill /> Shall not impersonate another person;
            <br />
            <BsBrightnessHighFill /> Shall not threaten the unity, integrity,
            defence, security or sovereignty of India, friendly relations with
            foreign States, or public order, or cause incitement to the
            commission of any cognizable offence or prevents investigation of
            any offence or is insulting other nation;
            <br />
            <BsBrightnessHighFill /> Shall not contain software virus or any
            other computer code, file or program designed to interrupt, destroy
            or limit the functionality of any computer resource;
            <br />
            <BsBrightnessHighFill /> Shall not be patently false and untrue, and
            written or published in any form, with the intent to mislead or
            harass a person, entity or agency for financial gain or to cause any
            injury to any person.
            <br />
            <BsBrightnessHighFill /> Shall not constitute an unfair trade
            practice
            <br />
            <BsBrightnessHighFill /> shall not distribute or contain spam,
            multiple/ chain letters, or pyramid schemes in any of its forms.
            <br />
            <BsBrightnessHighFill /> shall not distribute viruses or any other
            technologies that may harm RotateKey or the interests or property of
            RotateKey users or impose an unreasonable load on the infrastructure or
            interfere with the proper working of RotateKey.
            <br />
            <BsBrightnessHighFill /> shall not, directly or indirectly, offer,
            attempt to offer, trade or attempt to trade in any goods and
            services, the dealing of which is prohibited or restricted in any
            manner under the provisions of any applicable law, rule, regulation
            or guideline for the time being in force.
            <br />
            <BsBrightnessHighFill /> shall not be placed in a wrong category or
            in an incorrect area of the site.
            <br />
            <BsBrightnessHighFill /> shall not be placed in any other RotateKey site
            except on the site that relates to the city in which you are
            located.
            <br />
            <BsBrightnessHighFill /> shall not list or post or pertain to
            information that is either prohibited or restricted under the laws
            of the Republic of India and such listing, posting or information
            shall not violate RotateKey Listing Policy.
            <br />
            <BsBrightnessHighFill /> You consent to receive communications by
            email, call or by such other mode of communication, electronic or
            otherwise related to the services provided through the website.
            <br />
            <br />
            <BsFillStopCircleFill /> You agree that your listing, posting and /
            or Information: if you use the Site by registering on the Site, you
            are responsible for maintaining the confidentiality of your User ID,
            password, email address and for restricting access to your computer,
            computer system, computer network and your RotateKey account, and you
            are responsible for all activities that occur under your User ID and
            password. If you access the Site using any electronic device other
            than by registration on the Site, the AUP remains applicable to you
            in the same manner as if you are a registered user on the Site.
          </b>
        </li>

        <li className="p-2 fs-16 text-black">
          <BsChevronDoubleRight />{" "}
          <b>You (the Seller) agree to provide the following information:</b>
        </li>
        <li className="p-2 fs-16 text-black">
          <BsStopCircle /> Contractual information pertaining to the goods, if
          any.
          <br />
          <BsStopCircle /> Total price of any good or service, along with the
          breakup price for the good or service, showing all the compulsory and
          voluntary charges and the applicable tax.
          <br />
          <BsStopCircle /> All mandatory notices and information provided by
          applicable laws, and the expiry date of the good being offered for
          sale, where applicable.
          <br />
          <BsStopCircle /> All relevant details about the goods and services
          offered including country of origin
          <br />
          <BsStopCircle /> The name and contact numbers, and designation of the
          grievance officer of the Seller
          <br />
          <BsStopCircle /> Name and details of importer in case of imported
          goods, and guarantees related to the authenticity or genuineness of
          the imported products
          <br />
          <BsStopCircle /> Terms of exchange, returns, and refund including
          information related to costs of return shipping.
          <br />
          <BsStopCircle /> Relevant details related to delivery and shipment of
          such goods or services.
          <br />
          <BsStopCircle /> Any relevant guarantees or warranties applicable to
          such goods or services.
          <br />
          <BsStopCircle /> Whether registered entity
          <br />
          <BsStopCircle /> Physical address
          <br />
          <BsStopCircle /> Rating/aggregated feedback
        </li>

        <li className="p-2 fs-16 text-black">
          <BsChevronDoubleRight />{" "}
          <b>
            The Sellers represent and warrant to RotateKey that all the content
            pertaining to the goods/services by posted are accurate. Any
            advertisement. Post shall be consistent with the actual
            characteristics, access and usage conditions of such goods and
            services.
          </b>
        </li>
        <li className="p-2 fs-16 text-black">
          <BsChevronDoubleRight />{" "}
          <b>
            2. Eligibility
            <br />
            Use of www.RotateKey.com, either by registration or by any other means,
            is available only to persons, who are Citizens of the Republic of
            India, who are 18 yrs. of age and above and persons who can enter
            into a legally binding contract, and or are not barred by any law
            for the time being in force. If you access RotateKey, either by
            registration on the Site or by any other means, not as an individual
            but on behalf of a legal entity, you represent that you are fully
            authorized to do so and the listing, posting or information placed
            on the site on behalf of the legal entity is your responsibility and
            you agree to be accountable for the same to other users of the Site.
            <br />
            <br />
            3. Abuse of RotateKey's Services
            <br />
            You agree to inform us if you come across any listing or posting
            that is offensive or violates our listing policy or infringes any
            intellectual property rights by clicking on the following link
            <a href="mailto:support@RotateKey.com">support@RotateKey.com</a> to enable
            us to keep the site working efficiently and in a safe manner. We
            reserve the right to take down any posting, listing or information
            and or limit or terminate our services and further take all
            reasonable technical and legal steps to prevent the misuse of the
            Site in keeping with the letter and spirit of this AUP and the
            listing policy. In the event you encounter any problems with the use
            of our site or services, you are requested to report the problem by
            clicking on this link{" "}
            <a href="mailto:support@RotateKey.com">support@RotateKey.com</a> We have
            also appointed a Grievance Officer whose details are in the last
            portion of these Terms.
            <br />
            <br />
            4. Violations by User
            <br />
            You agree that in the event your listing, posting or your
            information violates any provision of this AUP or the listing
            policy, we shall have the right to disable the offending content,
            terminate and or suspend your membership of the Site and refuse to
            provide you or any person acting on your behalf, access to the Site.
            <br />
            <br />
            If any such content posted by you is disabled or removed, we shall
            provide you with a notification explaining the action being taken.
            You shall be given reasonable and adequate opportunity to dispute
            the action being taken and to request reinstatement of the access to
            such removed content. The Resident Grievance Officer (detailed in
            the parts below) shall be overseeing this process.
            <br />
            <br />
            Upon receiving actual knowledge in the form of an order by a court
            of competent jurisdiction or on being notified by the appropriate
            government or its agency, we shall not host, store or publish any
            unlawful information which is prohibited under any law for the time
            being in force in relation to the interest of sovereignty and
            integrity of India, security of the State, friendly relations with
            foreign states, public order, decency or morality, in relation to
            contempt of court, defamation, incitement to an offence relating to
            the above or any information which is prohibited under any law for
            the time being in force.
            <br />
            <br />
            If any such information is being hosted by us, we shall remove or
            disable access to that information no later than 36 hours from the
            receipt of the court order or on being notified by the Appropriate
            Government or its agency.
            <br />
            <br />
            We shall, within no later than 72 hours, also provide any
            information in our control or possession, to the appropriate
            government agency, for the purpose of verification of identity or
            for the prevention, detection, investigation or prosecution of
            offences under any law for the time being or for cyber security
            incidents..
            <br />
            <br />
            Grievance Redressed Mechanism under the Information Technology
            (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021
            If you wish to complain about our Services / the use of our services
            by others, please contact our Resident Grievance Officer, whose
            details are below:
            <br />
            <br />
            Name: Ramesh Kumar
            <br />
            <br />
            Designation: Grievance Officer
            <br />
            <br />
            Contact Details: grievanceofficer@RotateKey.com
            <br />
            <br />
            Your complaint will be acknowledged by email within twenty-four
            hours, providing you with a complaint number using that you can
            track the status of the complaint. We will dispose of such complaint
            within 15 days of receipt.
            <br />
            <br />
            We shall, within twenty-four hours from the receipt of a complaint
            made by an individual or any person on his/her behalf, in relation
            to any content which is prima facie in the nature of any material
            which exposes the private area of such individual, shows such
            individual in full or partial nudity or shows or depicts such
            individual in any sexual act or conduct, or is in the nature of
            impersonation in an electronic form, including artificially morphed
            images of such individual, take all reasonable and practicable
            measures to remove or disable access to such content which is
            hosted, stored, published or transmitted..
            <br />
            <br />
            Grievance Redressal Mechanism under the Consumer Protection
            (E-Commerce Rules), 2020 Name: Ramesh Kumar Designation: Grievance
            Officer
            <br />
            <br />
            Contact Details: grievanceofficer@RotateKey.com
            <br />
            <br />
            Your complaint will be acknowledged by email within forty-eight
            hours providing you with a ticket number using, which you can track,
            the status of the complaint. And redress the complaint within one
            month from the date of receipt of the Complaint.
            <br />
            <br />
            5. Content
            <br />
            The Site contains content, which includes Your Information, RotateKey's
            information and information from other users. You agree not to copy,
            modify, or distribute such content (other than Your Information),
            RotateKey's copyrights or trademarks. When you give us any content as
            part of Your Information, you are granting us a non-exclusive,
            worldwide, perpetual, irrevocable, royalty-free, sub-licensable
            right and license to use, reproduce, , publish, translate,
            distribute, perform and display such content (in whole or part)
            worldwide through the Site as well as on any of our affiliates or
            partners websites, publications and mobile platform. We need these
            rights with respect to the content in Your Information in order to
            host and display your content. If you believe that there is a
            violation, please notify us by clicking here{" "}
            <a href="mailto:support@RotateKey.com">support@RotateKey.com</a> We reserve
            the right to remove any such content where we have grounds for
            suspecting the violation of these terms and our Listing Policy or of
            any party's rights or law.
            <br />
            <br />
            6. Liability
            <br />
            You agree not to hold www.RotateKey.com or any of its officers,
            employees, agents responsible or accountable for any of your or
            other user's listing, postings or information and nor shall we, our
            officers, employees or agents be liable for any misuse, illegal
            activity or third party content as postings, listings or information
            are generated by various users directly and we do not have any role
            in the creation, publication or distribution of the posting, listing
            or information, nor are we in a position to have editorial control
            over the substance or content contained in the listings, postings,
            or information, save and except to the extent provided in these
            terms. You understand and agree that we do not guarantee the
            accuracy or legitimacy of any listing, posting, and information by
            other users. You further agree that we are not liable for any loss
            of money, goodwill, or reputation, or any special, indirect, or
            consequential damages arising out of your use of the site or because
            of any sale, purchase of goods and services with other users of the
            site. We also cannot guarantee continuous or secure access to our
            Services. Accordingly, to the extent legally permitted we exclude
            all implied warranties, of merchantability, fitness or quality of
            the Site and our services.
            <br />
            <br />
            7. Personal Information
            <br />
            By using RotateKey, you agree to the collection, transfer, storage and
            use of any personal information provided by you on the Site by RotateKey
            Classifieds India Private Limited. The data is stored and controlled
            on servers located in Bengaluru, India as further described in our
            Privacy Policy. By submitting your resume with your replies, you
            give permission to RotateKey to publicly display your resume, which can
            be freely accessed by anyone. You also agree to receive marketing
            communications from us unless you specifically indicate otherwise in
            writing to us through{" "}
            <a href="mailto:support@RotateKey.com">support@RotateKey.com</a> You may
            send questions about this policy to{" "}
            <a href="mailto:support@RotateKey.com">support@RotateKey.com</a>
            <br />
            <br />
            You agree that RotateKey may use information shared by you to provide
            customer services and to understand if any other services or
            advertisement listed on RotateKey website may interest you. You agree
            that, we may share personally identifiable data of any individual to
            our agents or recruiters or Affiliates defined as any person
            directly or indirectly controlling, controlled by, or under direct
            or indirect common control with, RotateKey, including its subsidiaries
            and associate companies.
            <br />
            <br />
            You agree that on receipt of a written request from a person who has
            purchased goods or services, in accordance with law, RotateKey may need
            to provide details of the Seller including:
            <br />
            <br />
            <BsStopCircle /> Address of headquarters and all branches
            <br />
            <BsStopCircle /> Name and details of seller’s website
            <br />
            <BsStopCircle /> E-mail address of Seller
            <br />
            <BsStopCircle /> Other information necessary for communication with
            the Seller
            <br />
            <br />
            8. Updates to this AUP and other terms and policies
            <br />
            We may update this AUP or the listing policy at any time and may
            notify you of such updates via a post on the boards and /or through
            email communications. The modified AUP and /or Listing Policy shall
            come into effect immediately. If we or our corporate affiliates are
            involved in a merger or acquisition, we may share personal
            information with another company, but this AUP shall continue to
            apply.
            <br />
            <br />
            You will also receive an e-mail once a year notifying you of any
            change to these Terms.
            <br />
            <br />
            You agree to receive an email at least once a year informing you
            that in case of non-compliance with the Information Technology
            (Intermediaries Guidelines) Rules, 2011, these terms, policies, we
            have the right to terminate access or usage rights of users
            immediately or remove noncompliant information, or both.
            <br />
            <br />
            9. Third Party Content and Services
            <br />
            RotateKey may provide, on its site, links to sites operated by other
            entities. If the user decides to view this site, they shall do so at
            their own risk, subject to that site’s terms and conditions of use
            and privacy policy that may be different from those of this site. It
            is the user’s responsibility to take all protective measures to
            guard against viruses or other destructive elements they may
            encounter on these sites. RotateKey makes no warranty or representation
            regarding, and do not endorse any linked website or the information
            appearing thereon or any of the products or services described
            thereon.
            <br />
            <br />
            Further, user’s interactions with organizations and/or individuals
            found on or through the service, including payment and delivery of
            goods and services, and any other terms, conditions, warranties or
            representations associated with such dealings, are solely between
            the user and such organization and/or individual. The user should
            make whatever investigation they feel necessary or appropriate
            before proceeding with any offline or online transaction with any of
            these third parties
            <br />
            <br />
            10.Indemnity
            <br />
            The User agrees to indemnity and hold RotateKey, its officers,
            subsidiaries, affiliates, successors, assigns, directors, officers,
            agents, service providers, suppliers and employees, harmless from
            any claim or demand, including reasonable attorney fees and court
            costs, made by any third party due to or arising out of content
            submitted by the user, users use of the service, violation of the
            TOU, breach by the user of any of the representations and warranties
            herein, or user’s violation of any rights of another. 11.Governing
            Law & Jurisdiction
            <br />
            <br />
            This AUP and the Listing Policy shall be governed and construed in
            accordance with the laws of the Republic of India and the courts at
            Bengaluru shall have exclusive jurisdiction on all matters and
            disputes arising out of and relating to the Site.
            <br />
            <br />
            12.Cost per reply terms:
            <br />
            1. You have to declare the amount you are willing to pay per reply
            or per view (PPR or PPV) and total number of expected replies. You
            must pre-pay the full amount for this classified ad to go live. If
            you are not satisfied with the service, you can always withdraw any
            unused balance to your Paytm wallet. Once the amount is withdrawn,
            the ad is either deleted or downgraded to a free ad.
            <br />
            <br />
            2. Only the first chat initiated by a user is considered as a reply.
            We actively remove spam communication from our system and you will
            not be charged for any spam messages.
            <br />
            <br />
            3. Any views generated on your View Ad Page from the premium ad are
            considered as a view. Views sent from any other source are not
            charged.
            <br />
            <br />
            4. Any unused amount can be withdrawn into your Paytm account as per
            request
            <br />
            <br />
            13.RotateKey Jobs:
            <br />
            1. As a job seeker, you agree that RotateKey will not be responsible for
            any payments made to a third party (including verified companies).
            <br />
            <br />
            2. As a recruiter, you agree that misuse or fraud use of this
            platform will result in deactivation and/or further action. You also
            agree to adhere to all job posting rules.
            <br />
            <br />
            14.Instant Hire product:
            <br />
            1. A fees will be charged on the Instant Hire product for accessing
            the candidate contact details. All fees and charges are
            nonrefundable and there are no refunds for partially used credits.
            <br />
            <br />
            15.No Guarantee of Business:
            <br />
            1. RotateKey does not guarantee business from the leads generated. RotateKey
            shall not be responsible or liable at all to the Advertiser if no
            business or business leads are generated for the Advertiser through
            premium ads on the Website. Advertiser understands that RotateKey’s only
            obligation is to place the premium ads on the Website in the manner
            provided for in these Terms. Accuracy of the information/content
            provided is the advertiser's responsibility and RotateKey will not be
            held responsible for false claims made by the advertiser.
            <br />
            <br />
            16.Marketplace Seller Incentive Policy
            <br />
            Policy purpose
            <br />
            <br />
            The policy aims to establish guidelines related to performance based
            incentives, which will be used by Quikr to reward the registered
            Sellers upon increasing the customer footfall in RotateKey’s website,
            which would significantly contribute to brand name of RotateKey
            <br />
            <br />
            Eligibility for Assured Furniture, Mobiles, Electronics, Appliances
            and Lifestyle products: All the Sellers registered in RotateKey’s
            platform and entered into marketplace agreement with RotateKey are
            eligible for the incentive plan upon satisfaction of all of the
            conditions mentioned below:
            <br />
            <br />
            1. Products listed by the sellers on the platform should meet the
            RotateKey fulfilled quality standards, as prescribed by RotateKey.
            <br />
            <br />
            2. No of products sold on platform, every month should be more than
            100 units.
            <br />
            <br />
            3. Order fulfilment – more than 90% fulfilment of the order within
            the prescribed timelines
            <br />
            <br />
            4. Customer sales return (DTO) - % of sales return to be less than
            20%.
            <br />
            <br />
            5. Customers should not have any open claim/litigation against the
            Seller
            <br />
            <br />
            6. Complaints, if any raised by the customers to be addressed within
            7 days
            <br />
            <br />
            Eligibility for Cars& Bikes
            <br />
            <br />
            All the Sellers registered in RotateKey’s platform and entered into
            marketplace agreement with RotateKey are eligible for the incentive plan
            upon satisfaction of all of the conditions mentioned below:
            <br />
            <br />
            1. No of products sold on platform, every month for bikes should not
            be less than 50 and for cars, it should not be less than 20.
            <br />
            <br />
            2. Order fulfilment – more than 95% fulfilment of the order within
            the prescribed timelines
            <br />
            <br />
            3. Sales return - % of sales returns to be less than 10%.
            <br />
            <br />
            4. NPS rating should be more than 40%.
            <br />
            <br />
            5. Customers should not have filed any claims/litigations against
            the Seller
            <br />
            <br />
            6. Complaints, if any raised by the customers to be addressed within
            7 days
            <br />
            <br />
            Quantum of Incentive
            <br />
            The quantum of incentive for such sellers under this Incentive
            policy will be decided on monthly basis by RotateKey management and will
            be intimated to the sellers.
            <br />
            <br />
            Timing of Incentive
            <br />
            Incentive shall be provide on a periodic basis as decided by RotateKey’s
            management
            <br />
            <br />
            Policy amendment and withdrawal
            <br />
            The policy is subject to review and may be changed or withdrawn at
            the discretion of RotateKey after giving 15 days’ notice to sellers.
            <br />
            <br />
            17. Notice of Infringement of Intellectual Property
            <br />
            1. RotateKey is not liable for any infringement of intellectual property
            rights arising out of materials posted on or transmitted through the
            site, or items advertised on the site, by end users or any other
            third parties
            <br />
            <br />
            2. If you are an owner of intellectual property rights or an agent
            who is fully authorized to act on behalf of the owner of
            intellectual property rights and believe that any Content or other
            content infringes upon your intellectual property right or
            intellectual property right of the owner on whose behalf you are
            authorized to act, you may write to us at{" "}
            <a href="mailto:support@RotateKey.com">support@RotateKey.com</a>
            to delete the relevant Content in good faith
            <br />
            <br />
            18. RotateKey Assured marketplace
            <br />
            1. RotateKey has set quality norms for the assured products that are
            followed by its merchants refurbishing them. These products may or
            may not be refurbished from the authorized OEM's and RotateKey is not
            liable for any claims arising from these products
            <br />
            <br />
            2. Unboxed products available in the RotateKey Assured Marketplace are
            generally as good as new and are non-defective. These products are
            typically returned to the sellers by buyers in their business for
            reasons such as wrong model dispatched, incorrect colour etc, or are
            opened by customers who find after checking the contents of the
            package that the wrong product was shipped or simply the change of
            mind at customers end. As per our terms and conditions, if a product
            does not meet our buyers' expectations, we encourage them to not
            accept it and subsequently initiate a refund of the payment. These
            products also come with third party warranty of specific duration
            which would change from time to time
            <br />
            <br />
            3. Assured Mobile Phones under Excellent/Like New, Good and Fair
            conditions come with a compatible charger only. Also, Earphones are
            not part of a box contents.
            <br />
            <br />
            4. We do not warrant that product descriptions are accurate and
            actual condition of the product may vary due to enhancements.
            <br />
            <br />
            5. Warranty on Assured Mobile Phones is optional and customers can
            avail the same by paying applicable charges.
            <br />
            <br />
            19. RotateKey Easy
            <br />
            1. We strongly recommend our users to exercise their discretion &
            due diligence about all relevant aspects prior to availing any
            products/services. Please note that RotateKey Classifieds India Pvt.
            Ltd. does not implicitly or explicitly endorse any product/s or
            services provided by advertisers/service providers.
            <br />
            <br />
            2. The information related to name, address and contact details of
            the business establishments have been verified as existing at the
            time of registering any advertiser with RotateKey Classifieds India Pvt.
            Ltd Only (Premium and Top Choice customers). This verification is
            solely based on the documents as supplied by an advertiser/s or as
            per the details contained in Customer Registration Form.
            <br />
            <br />
            3. Service providers at all times ensure that all the applicable
            laws that govern their profession are followed while rendering their
            services.
            <br />
            <br />
            4. We strongly recommend our users to exercise their discretion &
            due diligence about all relevant aspects prior to availing any
            products/services. Please note that RotateKey Classifieds India Pvt.
            Ltd. does not implicitly or explicitly endorse any product/s or
            services provided by advertisers/service providers. The information
            related to name, address, and contact details of the business
            establishments have been verified as existing at the time of
            registering any advertiser with RotateKey Classifieds India Pvt. Ltd
            Only (Premium and Top Choice customers). This verification is solely
            based on the documents as supplied by an advertiser/s or as per the
            details contained in Customer Registration Form.
            <br />
            <br />
            20. Assured Lifestyle
            <br />
            1. We have numerous brands to choose from, whether it is the Unboxed
            Fashion or Lifestyle Products, which we are adding to our
            categories, every day. Whatever the product is, there are a few
            things that never change – jaw dropping discounts, quality products
            and happy customers.
            <br />
            <br />
            2. Wherever you are from, we deliver there. Associating with our
            external partners, we take all the efforts to bring it to your
            doorstep.
            <br />
            <br />
            3. No COD option Available*
            <br />
            <br />
            4. No Replacement/Refund*
            <br />
            <br />
            5. If unfortunately you have to cancel an order, please do so within
            3 hours of placing the order (or before the product is shipped) ONLY
            by calling us at 080-67364545 for outright cancellations by you.
            <br />
            <br />
            6. RotateKey reserves the right, to change, modify, add or remove
            portions of this Policy, at any time without any prior written
            notice to the Participant.
            <br />
            <br />
            21. Miscellaneous:
            <br />
            1. "If all premium ads available to the advertiser under the
            subscription scheme are not used / availed of during the period of
            these terms, the unutilized units shall be forfeited - no refund
            shall be made and neither can the unutilized credits be carried
            forward."
            <br />
            <br />
            2. Premium ads are prioritized over free ads on the website on
            search and browse pages. The sequence in which premium ads are
            displayed will be controlled by RotateKey's search algorithm, which is
            RotateKey's sole prerogative. The advertiser shall not have a say in
            determining the sequence in which ads are displayed within the set
            of premium ads matching a user's search query/browse intent.
            <br />
            <br />
            3. Banner slots will be provided as per the details mentioned in the
            contract form. Banner slots will be shared between RotateKey's
            advertisers who have subscribed for a particular slot and the
            banners will be displayed on a rotational basis. A banner will be
            displayed only after seeking approval from the advertiser. RotateKey
            does not provide any guarantees of impressions or clicks for the
            client banners.
            <br />
            <br />
            4. Verified leads refer to consumers who have expressed interest in
            consuming a service from a service provider recommended by RotateKey.
            Any dispute regarding any verified lead shall be raised to RotateKey
            within 3 days of the lead being sent in writing/email and will be
            analyzed on a case by case basis. RotateKey's decision will be final and
            binding in the event of a dispute regarding a lead, which may
            include providing compensation to the customer in an appropriate
            form to be decided by RotateKey.
            <br />
            <br />
            5. The advertiser acknowledge that any liability/claim in respect of
            the products or services promoted through the Advertisements under
            the scope of this Agreement shall be solely to the account of the
            advertiser. It is agreed that in case of any claims in respect of
            the same against RotateKey, the advertiser shall indentify RotateKey against
            all such claims and damages.
            <br />
            <br />
            6. Advertiser shall procure and keep valid all necessary licenses,
            permissions, authorizations, consents, approvals and registrations
            with/from any government department, agency or authority required
            for it to perform the Services in accordance with this Agreement and
            bear sole and exclusive responsibility for all compliances with such
            licenses permissions, authorizations, consents, approvals and
            registrations.
            <br />
            <br />
            7. RotateKey does not support sellers to sell imported mobile phones,
            electronic items on its platform, through any means. If at all any
            such product is being sold on RotateKey Website, RotateKey is not
            responsible being a Marketplace.
            <br />
            <br />
            8. All the Assured/Refurbished handsets, electronic items listed on
            RotateKey belong to sellers. The Sellers are doing refurbishment of the
            products and RotateKey is not responsible for the Quality of any of
            these products.
            <br />
            <br />
            22. Plastic Waste Management (PMW) Rules
            <br />
            You are prohibited by the Plastic Waste Management (PMW) Rules, 2016
            read with the Environmental (Protection) Act, 1986 selling the
            single use plastic including polystyrene and expanded polystyrene
            (SUP) goods or packaging including the following:
            <br />
            <br />
            1. Ear buds with plastic sticks, plastic sticks for balloons,
            plastic flags, candy sticks, ice cream sticks, polystyrene
            (thermocol) for decoration;
            <br />
            <br />
            2. Plates, cups, glasses, cutlery such as forks, spoons, knives,
            straws, trays, wrapping or packing films around sweet boxes,
            invitation cards, plastic or PVC banners less than 100 micron,
            stirrers etc.
            <br />
            <br />
            1. Definitions of words
            <br />
            <br />
            2. Protected Equipment
            <br />
            Product/s purchased as shown on purchase Invoice, for product
            category such as Mobiles, Tablets along with Protection Plan Product
            or Services through their medium.
            <br />
            <br />
            3. Protection Plan
            <br />
            It means the Protection Plan Booklet, the Schedule and any
            applicable endorsements or memoranda issued to YOU. The Protection
            Plan contains the details of the extent of the cover available in
            respect of item (s) owned by the Person(s), what is excluded from
            the cover and the conditions, warranties on which the Protection
            Plan is issued
            <br />
            <br />
            4. Sum Protected
            <br />
            <br />
            Equipment value as Calculated basis the fair market value on the
            date of purchase of protection plan
            <br />
            <br />
            5. WE/OUR/OURS/US
            <br />
            It means service provider or its authorized affiliates
            <br />
            <br />
            6. Dealer / Medium
            <br />
            For the purpose of this Protection Plan, it shall mean Assured
            retailers, distributors, web, online & app channels including all
            their associates.
            <br />
            <br />
            7. Beneficiary/User/YOU/YOUR/YOURS:
            <br />
            The purchaser of the equipment along with Protection Plan, whose
            name is as shown on the Invoice, Where the purchaser is a company,
            Beneficiary/User shall mean any representative / employee of the
            company authorized to use the Equipment.
            <br />
            <br />
            8. Breakdown
            <br />
            The sudden and unforeseen failure of the parts of the covered item
            due to defects in materials and workmanship (but not by normal wear
            and tear, normal deterioration or negligence) necessitating
            immediate repairs or replacement.
            <br />
            <br />
            9. Normal Wear and Tear
            <br />
            The gradual reduction in operating performance of a covered part of
            the item, having regard to the age of the item and usage.
            <br />
            <br />
            10. Manufacturer’s Warranty
            <br />
            It means the original equipment warranty coverage provided by the
            Manufacturer from date of purchase of the item.
            <br />
            <br />
            11. New Replacement Value
            <br />
            It means cost of replacement of the item covered by a new/ Like New/
            refurbished / similar condition item /property of same kind and same
            capacity
            <br />
            <br />
            12. Excess
            <br />
            Excess is minimum value, which shall be deducted in claim
            settlement. Excess is 10% of the purchase value, or 500 rupees,
            whichever is higher
            <br />
            <br />
            13. Loss/Lost: <br />
            It means the Damage or Loss.
            <br />
            <br />
            3. General conditions
            <br />
            1. Reasonable Precaution and Care of Property: YOU/owner/ Person(s)
            shall take all reasonable precautions for safety and soundness of
            item covered to prevent the loss in order to minimize claims. The
            owner /Person must comply with manufacturer’s recommended actions
            for use, inspection, maintenance along with other instructions and
            shall comply with all statutory requirements or other regulations.
            <br />
            <br />
            4. Scope of Contract
            <br />
            What is not covered we will not be liable for any claim on the
            device for which the protection plan has not been activated or the
            device has not passed the scanner test. We will not be liable for
            any claim that is originally not covered by the manufacturer of the
            device.
            <br />
            <br />
            These may or may not be limited to –
            <br />
            i) Any claim where the original identification/serial number is
            removed, obliterated or altered from the Covered Asset.
            <br />
            <br />
            ii) Any incorrect or abnormal electrical or signal connection to the
            equipment.
            <br />
            <br />
            iii) Any modification to the equipment, which is not in accordance
            with the manufacturer’s instructions or use of any accessory, which
            has not been approved by the manufacturer.
            <br />
            <br />
            iv) Any Equipment used outside India and requiring service/claim
            outside the Indian Territorial boarders
            <br />
            <br />
            v) Any defect in external wiring, electrical connection that are not
            an integral part of the equipment.
            <br />
            <br />
            vi)Any corrosion, blockages, denting or scratching on the equipment.
            <br />
            <br />
            vii)Any routine maintenance or service or inspection of the
            equipment.
            <br />
            <br />
            viii) Any cleaning of video/audio heads or any normal replaceable or
            limited life consumables of the equipment.
            <br />
            <br />
            ix) Any repair carried out by anyone other than authorized service
            providers of the equipment, as approved by the manufacturer or
            service provider after the protection plan has been activated.
            <br />
            <br />
            5. Special Conditions
            <br />
            1. Indemnity
            <br />
            a) In cases where an item can be repaired , we will pay expenses
            necessarily incurred to restore the damaged item to its former state
            of serviceability plus the cost of dismantling and re-assembly
            incurred for the purpose of effecting the repairs. we will only
            deduct a applicable taxes (Taxes may vary from state to state)
            <br />
            <br />
            b) No deduction shall be made for depreciation in respect of parts
            replaced, but the value of any salvage will be taken into account.
            If the cost of repairs detailed herein equals or exceeds the actual
            value of the item Covered immediately before occurrence of the
            damage, the settlement shall be made on the basis provided for in
            (b) below
            <br />
            <br />
            c) In cases where covered item is a total loss, we will pay for the
            refurbished/Same or similar condition /Like New replacement value
            subject to maximum of the purchase value of the covered item.
            However, the salvage and excess will be taken into account in such
            cases.
            <br />
            <br />
            d) In the event that replacement property of like kind and quality
            is not obtainable, new property which is as similar as possible to
            that suffering damage and which is capable of performing the same
            function, shall be deemed to be new property of like kind and
            quality and in no event this be considered as a betterment to the
            covered person. However, if damaged item may be replaced by a
            similar item available at the time of repair/replacement, any
            voluntary betterment opted for by the covered person shall be
            reimbursable after making appropriate deduction for betterment.
            <br />
            <br />
            We will make payments only after being satisfied, by production of
            necessary bills and documents, that the repairs have been effected
            or replacements have been taken place, as the case may be.
            <br />
            <br />
            Insurance
            <br />
            <br />
            1. Exclusions
            <br />
            The Company shall not be liable in respect of loss or damage to
            Protected Equipment relating to or caused due to the following:
            <br />
            1. Loss, such forgotten/misplaced/theft unattended including from an
            unlocked vehicle, missing, and any loss under mysterious
            circumstances.
            <br />
            <br />
            2. Loss resulting from or caused by theft, or attempted theft of
            Protected Equipment, left in unattended vehicle or room except car
            of fully enclosed saloon type or room, having at the time all the
            doors/windows and other opening securely locked and properly
            fastened
            <br />
            <br />
            3. Loss due to Intentional act or willful neglect.
            <br />
            <br />
            4. Dead on Arrival / DOA cases will not be covered
            <br />
            <br />
            5. Any loss due to hire or loan of the Protected equipment to a
            third party or if ownership is transferred.
            <br />
            <br />
            6. Loss arising due to unlawful act including Terrorist activity,
            War, Nuclear Explosion, Radioactive Contamination, Chemical,
            Biochemical, Biological, Electromagnetic, Cyber Attack etc.
            <br />
            <br />
            7. Any loss if the protected equipment is not connected to any
            cellular network of service providers (only for mobiles and Tablets
            with SIM slot).
            <br />
            <br />
            8. Consequential loss of any kind or as lost, of/left description
            including wear & tear, manufacturing defects etc.
            <br />
            <br />
            9. Loss caused by incorrect storage, poor care and maintenance,
            careless use, gross negligence, incorrect installation and incorrect
            set-up.
            <br />
            <br />
            10. Loss covered by supplier, dealer or factory warranty.
            <br />
            <br />
            11. Any loss of data or software installed in the equipment.
            <br />
            <br />
            12. Any loss arising outside the territorial limits of India.
            <br />
            <br />
            13. Any loss that is cosmetic in nature and does not result in to
            complete stoppage of/or functioning of equipment.
            <br />
            <br />
            14. Any loss effecting to SIM card and any ancillary product etc
            even if the equipment result into complete stoppage of working.
            <br />
            <br />
            15. Any loss or damage to accessories and panels even if forming a
            part of standard pack or to any complementary or ancillary product/s
            made available under any promotional scheme.
            <br />
            <br />
            16. Theft of any kind of the Protected Equipment.
            <br />
            <br />
            2. Special Exclusions
            <br />
            The Company shall not be liable in respect of loss or damage to
            protected equipment relating to or caused due to the following:
            <br />
            4.1 Loss or damage due to intentional overloading of the Protected
            Equipment. Intentional Overloading shall mean intentional loading of
            any hardware or software other than standard packing which comes
            from Manufacturer.
            <br />
            <br />
            4.2 Loss or damage due to any experiments or tests and/or
            alterations resulting to any abnormal conditions of the Protected
            Equipment.
            <br />
            <br />
            4.3 Loss or damage due to mechanical or electrical breakdown or
            derangement, unless such loss is accidental damage and which is not
            covered within the manufacturer’s warranty. 4.4 Penalties for delay
            or detention or in connection with guarantees of performance or
            efficiency.
            <br />
            <br />
            4.5 Loss due to the Protected Equipment which gradually develops
            flaws, defects, cracks or partial fractures in any part not
            necessitating immediate stoppage, although at some future time
            repair or renewal of the parts affected may be necessary.
            <br />
            <br />
            4.6 Loss due to deterioration, wearing away, or wearing out of any
            part of the Protected Equipment that is caused due to or naturally
            resulting from its normal use or exposure.
            <br />
            <br />
            4.7 Service Provider will not be liable for any damages which have
            happened during handling of the damage equipment by Courier Service
            / logistic Partner
            <br />
            <br />
            4.9 The Company shall not be liable for any loss or damage claim if:
            Plan.
            <br />
            <br />
            i) Due to the inability of the Beneficiary/User to submit either the
            claim processing and/or claim payment documents as required by the
            Company for processing the claim.
            <br />
            <br />
            RotateKey Office Addresses:
            <br />
            #12, Second Floor, 3rd Cross Patel Narayana Reddy Layout, 6TH Block,
            Koramangala Bengaluru , karnataka-560095
          </b>
        </li>
      </ul>
    </>
  );
};

export default Terms;
