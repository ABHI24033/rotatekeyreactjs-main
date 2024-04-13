import React, { useEffect } from "react";
import "./Listingpolicy.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsStopCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { add } from "../../store/Track/trackUserSlice";

const Listingpolicy = () => {
  const disptach = useDispatch();
  useEffect(() => {
    disptach(add({ view: ["Listingpolicy"] }));
  }, []);
  return (
    <>
      <div
        className="page-title listingpolicy-scroll page-title--small align-left  hidden-sm hidden-xs visible-md-block visible-lg-block"
        style={{
          background: "linear-gradient(rgb(43, 88, 118), rgb(78, 67, 118))",
        }}
      >
        <div className="container">
          <div className="page-title__content">
            <h1 className="page-title__name" style={{ fontFamily: "Roboto" }}>
              Listing Policy
            </h1>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-3">
        <b>
          For use of our Site and other services, you confirm and declare that
          you shall not list or post or provide information in relation to the
          sale or purchase or exchange of goods and services, content or
          information that are illegal under the laws of the Republic of India
          and/or are not permitted as per the prohibited items policy listed
          below.
        </b>
      </div>
      <div className="container">
        <div className="text-center">
          <b>1. Prohibited items policy</b>
        </div>
        <ul>
          <li className="fs-16 text-black p-1">
            <BsStopCircle className="text-danger" /> A. We specifically prohibit
            any listing or posting of classifieds or information in relation to
            the following items:
          </li>
          <li className="fs-16 text-black p-1">
            <BsStopCircle className="text-danger" /> Alcoholic Beverages,
            Liquor, tobacco products, drugs, psychotropic substances, narcotics,
            intoxicants of any description, medicines, palliative/curative
            substances nor shall you provide link directly or indirectly to or
            include descriptions of items, goods or services that are prohibited
            under any applicable law for the time being in force including but
            not limited to the Drugs and Cosmetics Act, 1940, the Drugs And
            Magic Remedies (Objectionable Advertisements) Act, 1954 Narcotic
            Drug and Prohibited Substances Act and the Indian Penal Code, 1860.
          </li>
          <li className="fs-16 text-black p-1">
            <BsStopCircle className="text-danger" /> Living, dead person and/or
            the whole or any part of any human which has been kept or preserved
            by any means whether artificial or natural including any blood,
            bodily fluids and/ or body parts
          </li>
          <li className="fs-16 text-black p-1">
            <BsStopCircle className="text-danger" /> Prostitution or any other
            service in the nature there of that purports to violate the
            provisions of Immoral Act or Indecent representation of women which
            violates the contemporary standards of morality and decency in
            Indian society.
          </li>
          <li className="fs-16 text-black p-1">
            <BsStopCircle className="text-danger" /> Religious items, including
            books, artifacts, etc. or any information, description of any such
            item that is likely to affect the religious sentiments of any person
            or group
          </li>
          <li className="fs-16 text-black p-1">
            <BsStopCircle className="text-danger" /> Mature Audiences Policy
            includes films which do not have a certificate for public exhibition
            issued by the Central Board of Film Certification and or described
            and depict or otherwise deal with matters which are revolting or
            repulsive and or tend to deprave a person’s mind in such a way that
            they tend to offend against the standards of morality, decency and
            propriety generally accepted by reasonable adults
          </li>
          <li className="fs-16 text-black p-1">
            <BsStopCircle className="text-danger" /> Obscene Items includes
            items which contain an indecent representation of women within the
            meaning of the Indecent Representation of Women (Prohibition) Act,
            1986; Any publication or film or item that describes or depicts a
            minor who is, or who appears to be, under 18 (whether the minor is
            engaged in sexual activity or not) and any computer games not
            suitable for minor that are unsuitable for a minor to see or play.
          </li>
          <li className="fs-16 text-black p-1">
            <BsStopCircle className="text-danger" /> Offensive Material intended
            for use in a sexual setting (including "bondage" and "fetish"
            items,) displaying sexual activity or portraying human genitalia in
            a "life-like" or realistic fashion
          </li>
          <li className="fs-16 text-black p-1">
            <BsStopCircle className="text-danger" /> "Antiquities" and "Art
            Treasures" in violation of the provisions of the Antiquities and Art
            Treasures Act, 1972 ("the Act")
            <br />
            <br />
            <BsStopCircle className="text-danger" /> Information or items that
            are defamatory, libelous, threatening or abusive in nature
            Information that is fraudulent, misrepresenting as to the nature and
            use of the goods or the services.
            <br />
            <br />
            <BsStopCircle className="text-danger" /> Counterfeit, Pirated and
            stolen goods or unauthorized illegal services (services for which
            you are not licensed or permitted to do or do not have the authority
            to undertake).
            <br />
            <br />
            <BsStopCircle className="text-danger" /> Items, goods and services
            that infringe or attempt to pass off any third parties' intellectual
            property or rights of publicity or moral rights and or purports to
            breach any persons right to privacy.
            <br />
            <br />
            <BsStopCircle className="text-danger" /> Electronically transmitting
            through any medium computer viruses of any type or any computer
            program that facilitates hacking of a computer system which the
            intent to damage a computer or computer network or intercept any
            personal data.
            <br />
            <br />
            <BsStopCircle className="text-danger" /> Your information shall not
            include any hate content, that is derogatory or slanderous in nature
            that may directed to any individual or group or advocate violence
            against any users' individuals and or animals.
            <br />
            <br />
            <BsStopCircle className="text-danger" /> Hazardous chemicals and
            pesticides and/ or items in violation of Hazardous Chemicals Act,
            1985.
            <br />
            <br />
            <BsStopCircle className="text-danger" /> Fireworks, Destructive
            Devices and Explosives including any material that enables the
            making of fireworks, explosive triggers and explosive devices.
            <br />
            <br />
            <BsStopCircle className="text-danger" /> Identity Documents,
            Personal Financial Records & Personal Information (in any form,
            including mailing lists)
            <br />
            <br />
            <BsStopCircle className="text-danger" /> Lottery Tickets,
            Sweepstakes Entries and Slot Machines.
            <br />
            <br />
            <BsStopCircle className="text-danger" /> Items in violation of the
            Food Adulteration Act, 1954.
            <br />
            <br />
            <BsStopCircle className="text-danger" /> Military or Police Badges,
            Uniforms, coats-of-arms and or any Government emblems, insignia,
            and/ or items in violation of Emblems and names (Prevention of
            improper use) Act, 1950 and/ or Flag Codes of India Act, 2002
            <br />
            <br />
            <BsStopCircle className="text-danger" /> Weapons and related items
            (such as firearms, firearm parts and magazines, ammunition, tear
            gas, stun guns, switchblade knives or any other item which is
            prohibited under the Indian Arms Act, 1959.
            <br />
            <br />
            <BsStopCircle className="text-danger" /> "Pyramid schemes" and
            "Multilevel Marketing" and/ or similar scams which are solely listed
            for the purpose of defrauding users.
            <br />
            <br />
            <BsStopCircle className="text-danger" /> Spam, abusive, duplicate,
            listing, fraud schemes (e.g., "Get rich quick" "work at homes" scams
            which are solely listed for the purpose of duping users)
            <br />
            <br />
            <BsStopCircle className="text-danger" /> Inappropriate, Wrong
            Category (e.g dining table listed as office furniture). Incorrect
            City / Location of Listing (listing allowed only in the city you are
            based in, of listing)
            <br />
            <br />
            <BsStopCircle className="text-danger" /> International Listings.
            <br />
            <br />
            <BsStopCircle className="text-danger" /> belongs to another person
            and to which the user does not have any right;
            <br />
            <br />
            <BsStopCircle className="text-danger" /> is defamatory, obscene,
            pornographic, pedophilic, invasive of another ‘s privacy, including
            bodily privacy, insulting or harassing on the basis of gender,
            libellous, racially or ethnically objectionable, relating or
            encouraging money laundering or gambling, or otherwise inconsistent
            with or contrary to the laws in force;
            <br />
            <br />
            <BsStopCircle className="text-danger" /> is harmful to children;
            <br />
            <br />
            <BsStopCircle className="text-danger" /> infringes any patent,
            trademark, copyright or other proprietary rights
            <br />
            <br />
            <BsStopCircle className="text-danger" /> violates any law for the
            time being in force;
            <br />
            <br />
            <BsStopCircle className="text-danger" /> deceives or misleads the
            addressee about the origin of the message or knowingly and
            intentionally communicates any information which is patently false
            or misleading in nature but may reasonably be perceived as a fact;
            <br />
            <br />
            <BsStopCircle className="text-danger" /> impersonates another
            person;
            <br />
            <br />
            <BsStopCircle className="text-danger" /> threatens the unity,
            integrity, defense, security or sovereignty of India, friendly
            relations with foreign States, or public order, or causes incitement
            to the commission of any cognizable offence or prevents
            investigation of any offence or is insulting other nation;
            <br />
            <br />
            <BsStopCircle className="text-danger" /> contains software virus or
            any other computer code, file or program designed to interrupt,
            destroy or limit the functionality of any computer resource;
            <br />
            <br />
            <BsStopCircle className="text-danger" /> is patently false and
            untrue, and is written or published in any form, with the intent to
            mislead or harass a person, entity or agency for financial gain or
            to cause any injury to any person.
          </li>
        </ul>
      </div>

      <div className="mx-5">
        <b>
          B. Without prejudice to the generality of the above, RotateKey does not
          permit posting or listing of classifieds in relation to the following:
        </b>
      </div>
      <ul>
        <li className="p-1 fs-16 text-black">
          <AiFillPlayCircle className="text-danger" /> "Securities" within the
          meaning of the Securities Contract Regulation Act, 1956, including
          shares, bonds, debentures, etc. and/or any other financial
          instruments/assets of any description
        </li>
        <li className="p-1 fs-16 text-black">
          <AiFillPlayCircle className="text-danger" /> Living, dead creatures
          and/or the whole or any part of any animal which has been kept or
          preserved by any means whether artificial or natural including rugs,
          skins, specimens of animals, antlers, horns, hair, feathers, nails,
          teeth, musk, eggs, nests, other animal products of any description the
          sale and purchase of which is prevented or restricted in any manner by
          applicable laws (including those prohibited under The Wildlife
          Protection Act, 1972 and/ or The Environment Protection Act, 1986).
        </li>
      </ul>
      <div className="mx-5">
        <b>C. Your listing, information, Advertisement</b>
      </div>
      <ul>
        <li className="p-1 fs-16 text-black">
          <AiFillPlayCircle className="text-danger" /> Shall not be defamatory,
          trade libelous, unlawfully threatening or unlawfully harassing.
          Further shall not be fraudulent, misrepresenting, misleading or
          pertain to the sale of any illegal, counterfeit, stolen goods and or
          services which do not belong to you or you do not have the authority
          for. Further still shall not infringe any intellectual property, trade
          secret, or other proprietary rights or rights of publicity or privacy
          of any third party.
        </li>
        <li className="p-1 fs-16 text-black">
          <AiFillPlayCircle className="text-danger" /> Shall not contain any
          viruses, Trojan horses, worms, time bombs, cancel bots, Easter eggs or
          other computer programming routines that may damage, detrimentally
          interfere with, surreptitiously intercept or expropriate any system,
          data or personal information.
        </li>

        <li className="p-1 fs-16 text-black">
          <AiFillPlayCircle className="text-danger" /> Shall not be allowed to
          libel anyone or include hate, derogatory, slanderous speech directed
          at individuals or groups. You should not advocate violence against
          other users or individuals or groups.
        </li>
      </ul>
      <div className="mx-5">
        <b>
          2. In addition to the above and for the purposes of clarity all Users
          shall be expected to adhere to and comply with the following Policies
          while listing of items:
        </b>
      </div>
      <ul>
        <li className="p-1 fs-16 text-black">
          <AiFillPlayCircle className="text-danger" /> Restricted Item Policy:
          In addition to the above-prohibited items, policy users shall also
          adhere to and comply with the restricted items policy while listing,
          posting or providing information in relation to any goods or services.
        </li>
        <li className="p-1 fs-16 text-black">
          <AiFillPlayCircle className="text-danger" /> Duplicate Ad listings are
          not allowed. Any ad posted more than once with the same content or
          Title in the same city and category would be considered as a Duplicate
          Ad. We advise you to post multiple ads only if you have different
          items or services for sale. All duplicate ads would be deleted and
          posters penalized if the problem persists.
        </li>

        <li className="p-1 fs-16 text-black">
          <AiFillPlayCircle className="text-danger" /> Mature Audience/Sexually
          oriented material: Classifieds relating to items that includes items
          intended for use in sexual activity would not be permitted. (An
          example of such classifieds relating to an item not normally permitted
          would be a classified for the sale of a vibrator). Please also be
          aware that titles with graphic adult language are inappropriate,
          regardless of the item contained in the listing itself.
        </li>
      </ul>
      <div className="mx-5">
        <b>3. Details to be provided by the Seller:</b>
      </div>
      <ul>
        <li className="p-1 fs-16 text-black">
          <AiFillPlayCircle className="text-danger" /> Contractual information
          pertaining to the goods, if any.
        </li>
        <li className="p-1 fs-16 text-black">
          <AiFillPlayCircle className="text-danger" /> Total price of any good
          or service, along with the breakup price for the good or service,
          showing all the compulsory and voluntary charges and the applicable
          tax.
        </li>

        <li className="p-1 fs-16 text-black">
          <AiFillPlayCircle className="text-danger" /> All mandatory notices and
          information provided by applicable laws, and the expiry date of the
          good being offered for sale, where applicable.
        </li>
        <li className="p-1 fs-16 text-black">
          <AiFillPlayCircle className="text-danger" /> All relevant details
          about the goods and services offered including country of origin
        </li>
        <li className="p-1 fs-16 text-black">
          <AiFillPlayCircle className="text-danger" /> The name and contact
          numbers, and designation of the grievance officer of the Seller
        </li>
        <li className="p-1 fs-16 text-black">
          <AiFillPlayCircle className="text-danger" /> Name and details of
          importer in case of imported goods, and guarantees related to the
          authenticity or genuineness of the imported products
        </li>
        <li className="p-1 fs-16 text-black">
          <AiFillPlayCircle className="text-danger" /> Terms of exchange,
          returns, and refund including information related to costs of return
          shipping.
        </li>
        <li className="p-1 fs-16 text-black">
          <AiFillPlayCircle className="text-danger" /> Relevant details related
          to delivery and shipment of such goods or services.
        </li>
        <li className="p-1 fs-16 text-black">
          <AiFillPlayCircle className="text-danger" /> Any relevant guarantees
          or warranties applicable to such goods or services.
        </li>
        <li className="p-1 fs-16 text-black">
          <AiFillPlayCircle className="text-danger" /> Whether registered entity
        </li>
        <li className="p-1 fs-16 text-black">
          <AiFillPlayCircle className="text-danger" /> Physical address
        </li>
        <li className="p-1 fs-16 text-black">
          <AiFillPlayCircle className="text-danger" /> Rating/aggregated
          feedback
        </li>
        <li className="p-1 fs-16 text-black">
          <AiFillPlayCircle className="text-danger" /> Content is consistent
          with the actual characteristic, features of goods and services
        </li>
      </ul>

      <div className="mx-5">
        <b>4. Consequences of Breach of Listing Policy</b>
      </div>
      <ul>
        <li className="p-1 ">
          <b>
            Users who violate the prohibited items policy and or the restricted
            items policy may be subject to the following actions
          </b>
        </li>
        <li className="p-1 ">
          1. {""}Suspension or termination of membership.
        </li>

        <li className="p-1 ">
          2. {""}Permanent blocking of access to the site
        </li>
        <li className="p-1 ">
          3. {""}Reporting to Law Enforcement or Appropriate Authorities.
        </li>
        <li className="p-1 ">
          4. {""}Action will be taken in accordance with the Terms of Use.
        </li>
      </ul>
    </>
  );
};

export default Listingpolicy;
