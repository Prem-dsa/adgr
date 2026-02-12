import oxygenLaserTherapyImg from '../assets/Oxygen-Laser-Therapy.png';
import hydrafacial2Img from '../assets/Hydrafacial-2.png';
import nanoFueImg from '../assets/NANO-FUE-Hair.png';
import fueTransplantImg from '../assets/Untitled-design-2025-07-14T110348.203-1.png';
import basicTransplantImg from '../assets/Hair-Transplant.png';
import percutaneousFueImg from '../assets/Percutaneous-FUE-1-1.png';
import basicThinPolyDetailImg from '../assets/Basic-Thin-Poly.png';
import celebrityChoiceImg from '../assets/Celebrity-Choice.png';
import celebrityMirageImg from '../assets/Celebrity-Choice-Mirage-Hair-System.png';
import fullLaceImg from '../assets/Full-Lace-hair-system-1.png';
import menFullCapImg from '../assets/Men-Full-Cap.png';
import womenFullCapImg from '../assets/women-Full-Cap.png';
import scalpMicropigImg from '../assets/Scalp-Micropigmentation.png';
import partialAlopeciaImg from '../assets/PARTIAL-ALOPECIA.png';
import totalAlopeciaImg from '../assets/Total-Alopecia.png';
import microbladingImg from '../assets/Microblading.png';
import lipMicropigImg from '../assets/Lip-Micropigmentation.png';
import eyelashImg from '../assets/Eyelash.png';
import prpProImg from '../assets/IMG_1065-1024x683-1.png';
import gelPrpImg from '../assets/IMG_1065-1024x683-1-1.png';
import regenProImg from '../assets/IMG_1077-1024x683-1.png';
// Hair Treatments Data - Content from reference website
export const hairTreatmentsData = {
    // RESTORATION
    'nano-fue': {
        title: 'NANO FUE Hair Transplant',
        image: nanoFueImg,
        whatIsTitle: 'What is NANO FUE?',
        whatIs: 'NANO FUE (Nano Follicular Unit Extraction) is the most advanced version of traditional FUE, using ultra-fine micro punches (0.6mm–0.7mm) to extract individual hair follicles with minimal trauma and maximum precision. This technique ensures higher follicle survival, no visible scarring, faster healing, and natural, dense hairlines. At AdGro Hair Clinic, Nagercoil, we specialize in NANO FUE using cutting-edge tools and techniques for clients seeking flawless results with minimal downtime.',
        howItWorksTitle: 'How Does NANO FUE Work?',
        howItWorks: [
            { title: 'Scalp Assessment & Hairline Planning', description: 'We assess your scalp, hair thinning stage, and donor density. Based on your face shape and goals, we design a customized hairline.' },
            { title: 'Micro Punch Extraction', description: 'Using 0.6mm–0.7mm titanium or sapphire punches, we extract individual hair follicles one by one — causing no visible trauma to surrounding skin.' },
            { title: 'Follicles Preservation & Handling', description: 'Follicles are stored in chilled growth factor solutions to maintain vitality until implantation.' },
            { title: 'Implantation with DHI/Nano Implanters', description: 'Follicles are placed using special implanters, allowing ultra-precise angle, direction, and density.' }
        ],
        benefitsTitle: 'Why Choose NANO FUE for Hair Restoration?',
        benefits: [
            'Maximum Follicles Survival – Delicate handling means higher follicle retention.',
            'Natural Hairline Design – Ultra-dense packing for a fuller, younger look.',
            'Quick Recovery – Less bleeding, swelling, and faster return to routine.'
        ],
        conditionsTitle: 'Who Should Consider NANO FUE?',
        conditions: [
            'People wanting natural, undetectable hairlines',
            'Early stage baldness where precision and density matter',
            'Patients looking for shorter recovery time',
            'Beard, eyebrow, and moustache hair restoration',
            'Scalp with low donor density — maximum efficiency per Follicles'
        ],
        whyChooseUsTitle: 'Why AdGro for NANO FUE in Nagercoil?',
        whyChooseUs: ['Surgeon-Led Expertise', 'High-Density Results', 'Custom Treatment Plans', 'Before-After Documentation']
    },

    'fue-hair-transplant': {
        title: 'FUE Hair Transplant',
        image: fueTransplantImg,
        whatIsTitle: 'What is FUE Hair Transplant?',
        whatIs: 'FUE (Follicular Unit Extraction) is a modern, minimally invasive hair restoration technique where individual hair follicles are extracted from a donor area (usually the back of the head) and implanted into areas experiencing thinning or baldness. At AdGro Hair Clinic, Nagercoil, we use advanced FUE techniques to ensure natural-looking results, quick healing, and no visible scars. Each Follicles is placed with precision, respecting the direction, angle, and density of your natural hair growth.',
        howItWorksTitle: 'Step-by-Step Procedure at AdGro',
        howItWorks: [
            { title: 'Personalised Hairline Design & Follicles Planning', description: 'Our doctors evaluate your scalp condition, hair loss grade, and future expectations to plan the exact number of Follicles required.' },
            { title: 'Extraction of Follicles', description: 'Using a motorized punch, individual follicular units (containing 1–4 hairs) are gently extracted from the donor site without harming nearby follicles.' },
            { title: 'Implanting of the Follicles', description: 'Each Follicles is precisely implanted into the balding area using micro tools that ensure natural orientation and density.' },
            { title: 'Post-Care Guidance', description: "You'll receive personalized post-surgery instructions and topical solutions to enhance healing and growth." }
        ],
        benefitsTitle: 'Why Choose FUE Hair Transplant?',
        benefits: [
            'Minimally Invasive, No Stitches – No scalpels, no linear scars.',
            'Permanent Results – Transplanted hair grows for a lifetime.',
            'Quick Recovery, Back to Routine in Days – Low downtime and fast healing.'
        ],
        whyChooseUsTitle: 'Why Choose AdGro Hair Clinic for FUE in Nagercoil?',
        whyChooseUs: ['100% Natural Look Guarantee', 'Experienced Hair Surgeons', 'Transparent Follicles-Based Pricing', 'Real Results, Real Testimonials']
    },

    'basic-hair-transplant': {
        title: 'Basic FUE Hair Transplant',
        image: basicTransplantImg,
        whatIsTitle: 'What Exactly is Basic FUE Hair Transplant?',
        whatIs: 'Follicular Unit Extraction (FUE) is an advanced, minimally painful hair transplant technique that permanently restores hair. Healthy follicles are taken from the back and sides of the scalp and implanted into thinning or bald areas like the hairline or crown. By matching natural hair angle and density, FUE delivers natural-looking results with minimal downtime at a cost-effective level.',
        howItWorksTitle: 'How Does Basic FUE Hair Transplant Work?',
        howItWorks: [
            { title: 'Personalised Consultation & Scalp Assessment', description: 'One of our hair restoration specialists will evaluate your scalp situation, extent of baldness, and donor region availability. With this, a customised treatment strategy is designed according to your visual goals.' },
            { title: 'Follicular Unit Extraction', description: 'Individual healthy follicles are removed one by one from the donor region with state-of-the-art FUE equipment. The procedure is carried out under local anaesthesia for your comfort during the process.' },
            { title: 'Preparation of Follicle', description: 'The follicles are carefully prepared under magnification to form viable follicle, each having 1–3 hairs according to the need.' },
            { title: 'Implanting of the Follicle', description: 'Follicle are inserted into thinning or balding regions via micro-incisions, replicating the natural direction of growth to achieve maximum density and a natural-looking appearance.' },
            { title: 'Recovery & Results', description: 'Most patients return to normal activities after 2–3 days. Hair that is transplanted will fall out before entering the growing phase, with noticeable effects from 4–6 months and complete effects within 12 months.' }
        ],
        benefitsTitle: 'Why Choose Basic FUE Hair Transplant?',
        benefits: [
            'Uses Your Own Hair Follicles – Ensures natural compatibility in terms of hair texture, colour, and growth pattern.',
            'Quick, Same-Day Procedure – The entire session can be completed in one day, with a swift recovery period.',
            'Value for Money – Offers an affordable alternative to complex transplant surgery without compromising quality.'
        ],
        conditionsTitle: 'What Conditions Does This Treatment Help With?',
        conditions: [
            'Male Pattern Baldness (Androgenetic Alopecia)',
            'Female Pattern Hair Loss',
            'Receding Hairlines',
            'Bald Patches or Scalp Scarring',
            'Hair Loss Following Injury or Surgery',
            'Thinning Hair in Specific Zones'
        ],
        whyChooseUsTitle: 'Why Choose Advanced Grohair Clinic?',
        whyChooseUs: ['Clinically-Led Approach', 'Customised Hairline Design', 'Advanced FUE Technology', 'Transparent Consultations']
    },

    'percutaneous-fue': {
        title: 'Percutaneous FUE Hair Transplant',
        image: percutaneousFueImg,
        whatIsTitle: 'What Exactly is Percutaneous FUE?',
        whatIs: 'Percutaneous Follicular Unit Extraction or FUE is the most advanced and state-of-the-art technique of hair transplantation at present. In contrast to the conventional FUE, it utilises pinpoint micromotors and ultra-thin punches (even 0.7–0.8 mm diameter) to isolate and harvest hair follicles individually with less trauma and accuracy to the scalp than traditional FUE. The difference with this process is the ability to control depth, direction, and density of follicle implantation at implantation that leads to extremely natural, dense and permanent outcomes.',
        howItWorksTitle: 'How Does Percutaneous FUE Work?',
        howItWorks: [
            { title: 'Expert Consultation & Assessment', description: 'Our hair restoration experts examine your balding pattern, scalp health, and donor area quality. Then, we design a personalised hairline and determine the optimal follicle density to fit your facial proportions and look.' },
            { title: 'Follicular Unit Extraction', description: 'With 0.7–0.8 mm diameter micromotors and punches, hair follicles from the donor region (most commonly the sides and back of the scalp) are removed. The low-rotation technology minimises trauma and ensures high follicle viability.' },
            { title: 'Follicles Implantation', description: 'The extracted follicles are carefully implanted into the balding or thinning areas. The technique allows the specialist to control the angle, depth, and direction of each follicle, ensuring a dense, natural-looking result.' },
            { title: 'Recovery & Visible Results', description: 'The procedure is stitch-free and leaves no visible scarring. Patients typically resume daily activities within 1–2 days, with the donor area healing within a week. Initial growth is seen in 4–6 months, with full results usually achieved by 12 months.' }
        ],
        benefitsTitle: 'Why Choose Percutaneous FUE?',
        benefits: [
            'Quick Recovery – The patients returned to normal activity within 48 hours; healing at the donor site in 7 days.',
            'Tight Coverage in Single Sitting – Facilitates transplantation of thousands of follicle in single sitting.',
            'Rapid Recovery – All patients resume normal activities within 48 hours; donor site heals in as little as 7 days.'
        ],
        conditionsTitle: 'What Conditions Does This Treatment Help With?',
        conditions: [
            'Advanced Male Pattern Baldness',
            'High Forehead or Receding Hairline Restoration',
            'Scarring Alopecia or Previous Failed Transplants',
            'Eyebrow or Beard Hair Restoration (Advanced Coverage)',
            'Patients Needing Dense Coverage in a Single Session'
        ],
        whyChooseUsTitle: 'Why Choose Advanced Grohair Clinic?',
        whyChooseUs: ['Cutting-Edge Technology', 'Clinically Supervised Team', 'Patient-Centric Planning', 'Aftercare Support']
    },

    // REPLACEMENT
    'basic-thin-poly': {
        title: 'Basic Thin Poly',
        image: basicThinPolyDetailImg,
        whatIsTitle: 'What Exactly Is Basic Thin Poly?',
        whatIs: "Basic Thin Poly is a modern system of hair replacement that aims to provide a discreet, unrecognizable solution to people with thinning or balding hair. It has an ultra-thin polymer base which mimics the natural appearance of the scalp and is barely distinguishable after applying it. Whether you wish to regain confidence, look fuller, or simply want a non-surgical option that blends perfectly with your own hair—Basic Thin Poly offers a comfortable, long-lasting, and completely natural result.",
        howItWorksTitle: 'How Does Basic Thin Poly Work?',
        howItWorks: [
            { title: 'Consultation and Assessment', description: 'Our hair specialists start with a thorough consultation to assess your scalp condition, balding pattern, and lifestyle. This is used to ascertain the best way for your restoration process.' },
            { title: 'Customisation and Design', description: 'Your hair system is then completely customised—ranging from scalp tone matching to choosing the ideal hair color, texture, and density. The aim is to have an unnoticeable integration with your current hair.' },
            { title: 'Application Process', description: 'Using medically approved, skin-safe adhesives, the poly base is bonded securely to the scalp. The application ensures maximum flexibility, natural movement, and long-lasting hold without discomfort.' },
            { title: 'Final Cut and Styling', description: 'After attaching, your new hair is cut and styled by our professionals to fit your shape and style. The result is a naturally blended look that feels and flows like your own hair.' }
        ],
        conditionsTitle: 'This Treatment Helps With:',
        conditions: [
            'Lack of Volume and Density',
            'Scalp Sensitivity or Allergies',
            'Visible Thinning or Bald Spots',
            'Post-Medical or Stress-Related Hair Loss'
        ],
        whyChooseUsTitle: 'Why Choose AdGro for Basic Thin Poly?',
        whyChooseUs: ['Expert Craftsmanship', 'Tailored to You', 'Premium Tools & Materials', 'Ongoing Aftercare Support']
    },

    'celebrity-choice': {
        title: 'Celebrity Choice',
        image: celebrityChoiceImg,
        whatIsTitle: 'What Exactly Is Celebrity Choice?',
        whatIs: "Celebrity Choice is AdGroHair's best, non-surgical hair rebuilding system—crafting only the best in realism, flexibility, and comfort. Its revolutionary solution provides the newest technology with masterful artistry to produce a hairline so natural, it's hardly detectable. No matter if you prefer a lace front, thin skin, or mono base, each system is tailor-made for your scalp, style, and lifestyle, providing you with the confidence and freedom to wear your hair your way.",
        howItWorksTitle: 'How Does Celebrity Choice Work?',
        howItWorks: [
            { title: 'Consultation and Assessment', description: 'We start with an extensive assessment of your hair condition, scalp, and lifestyle to establish the best base and styling solutions for your new hair system.' },
            { title: 'Customisation and Design', description: 'Each hair system is customised to your natural hair colour, texture, density, and style preferences. We then construct the base—be it PU, mono, or thin skin—with a lace front for the most natural finish.' },
            { title: 'Fusion and Application', description: 'Our experts professionally bond the hair system to your scalp using safe adhesives. This fusion process ensures a secure fit and a completely undetectable finish.' },
            { title: 'Final Cut and Styling', description: 'Once bonding is done, the hair system is cut and styled to fit your facial features and style preference—giving you a fresh, clean, and natural look.' },
            { title: 'Maintenance and Care', description: "Designed for longevity, the Celebrity Choice system requires only occasional maintenance to stay in optimal condition. We'll guide you through care, upkeep, and when to return for touch-ups." }
        ],
        benefitsTitle: 'Why Celebrity Choice for Hair?',
        benefits: [
            'Unmatched Natural Appearance – Achieve an invisible hairline and seamless scalp integration.',
            'Style It Your Way – Spike it, mess it, part it, brush it back—you have complete control over your style.',
            'Luxury Without the Price Tag – Show off a celebrity-grade finish at a fraction of what upscale hair restoration typically costs.'
        ],
        conditionsTitle: 'This Treatment Helps With:',
        conditions: [
            'Complete Hairline Recreation',
            'Styling Versatility',
            'Photo-Ready Finish',
            'Sensitive Scalps',
            'High Impact, Low Maintenance'
        ],
        whyChooseUsTitle: 'Why Choose Advanced Grohair Clinic for Celebrity Choice?',
        whyChooseUs: ['Personalized Craftsmanship', 'Celebrity Aesthetics', 'Advanced Materials', 'Skilled Technicians']
    },

    'celebrity-choice-mirage': {
        title: 'Celebrity Choice Mirage',
        image: celebrityMirageImg,
        whatIsTitle: 'What Exactly Is the Celebrity Choice Mirage Hair System?',
        whatIs: "Celebrity Choice Mirage Hair System is a revolutionary non-surgical hair replacement system that provides unparalleled realism with a hairline so natural, it's almost invisible. Originally a Hollywood and Bollywood A-list secret, this ultra-luxurious system has a meticulously designed lace base that perfectly blends into your scalp — with an incredibly light and unnoticeable finish. Whether you have premature thinning hair or end-stage hair loss, the Mirage system will assist in restoring confidence with comfort as well as with style.",
        howItWorksTitle: 'How Does the Celebrity Choice Mirage Hair System Work?',
        howItWorks: [
            { title: 'Consultation and Customisation', description: 'Your journey starts with an individual consultation, during which our professionals evaluate your pattern of hair loss, comprehend your objectives, and create a system customized to suit your requirements.' },
            { title: 'Hair System Crafting', description: 'Using premium-quality hair, the system is hand-knotted onto a transparent lace base. Every detail — from colour and density to texture and hairline — is crafted to replicate your natural hair as closely as possible.' },
            { title: 'Application and Styling', description: 'The system is applied using skin-safe, medical-grade adhesives or tapes. Once fixed, it is cut and styled professionally to blend seamlessly with your overall look.' },
            { title: 'Maintenance and Care', description: 'Routine maintenance keeps the system looking fresh, secure, and natural. With proper care and servicing, the system can last for several months while maintaining its flawless appearance.' }
        ],
        benefitsTitle: 'Why Choose the Celebrity Choice Mirage Hair System?',
        benefits: [
            'Unparalleled Realism – Offers the most realistic appearance of hairline and scalp finish.',
            'Lightweight and Unnoticeable – Breathable lace foundation ensures total comfort and cover.',
            'Non-Painful and Non-Surgical – Instant results without pain, downtime, or surgery side effects.'
        ],
        conditionsTitle: 'This Treatment Is Useful For:',
        conditions: [
            'Premature Thinning Hair',
            'End-Stage Hair Loss',
            'Scalp Sensitivity',
            'Hairline Recession'
        ],
        whyChooseUsTitle: 'Why Choose Advanced Grohair Clinic for the Celebrity Choice Mirage Hair System?',
        whyChooseUs: ['100% Personalised', 'Expert Technicians and Stylists', 'Pan-India Service and Aftercare', 'Confidential Consultations']
    },

    'full-lace': {
        title: 'Full Lace Hair System',
        image: fullLaceImg,
        whatIsTitle: 'What Exactly Is a Full Lace Hair System?',
        whatIs: "Full Lace Hair System is a non-surgical, premium hair replacement system that offers natural hair. Composed of all lace, the system offers a light, airy base that is perfectly suitable for your scalp. The system's design offers a completely undetectable hairline, which offers the impression of natural, real hair growth. The system is constructed to your hairstyle and scalp for ultimate comfort and perfect look. Perfect for someone wanting a superior-quality, non-invasive hair regrowth treatment, the Full Lace Hair System boasts ultimate realism.",
        howItWorksTitle: 'How Does a Full Lace Hair System Work?',
        howItWorks: [
            { title: 'Consultation and Design', description: 'Our expert specialists will assess your hair loss pattern, scalp situation, and way of life needs. Based on this, we will develop a personalized Full Lace Hair System compatible with your original hair texture, colour, and density.' },
            { title: 'Customisation and Fitting', description: 'After the system is designed, it is molded to fit your scalp exactly. In the fitting session, it is applied cautiously using safe medical-grade adhesives, with the aim of having a flawless match with your own hair so that the effect will be impossible to detect.' },
            { title: 'Maintenance and Styling', description: 'Once applied, the Full Lace Hair System may be styled exactly as your hair would be. Ongoing care will keep the system secure, clean, and looking as natural as possible. Proper care will give the system a long-lasting solution to baldness.' }
        ],
        benefitsTitle: 'Why Choose a Full Lace Hair System?',
        benefits: [
            'Non-Surgical and Safe – A painless, surgery-free hair loss solution with immediate results and no downtime.',
            'Durability – Crafted from high-quality materials, the Full Lace Hair System lasts for months with proper care.',
            'Light and Breathable – Made from high-quality lace, the system is lightweight and comfortable for all-day wear.'
        ],
        conditionsTitle: 'This Treatment Helps With:',
        conditions: [
            'Complete or partial baldness of the scalp',
            'Recurring hair thinning, particularly on the crown or front hairline',
            'Loss of hair due to medical illnesses or treatments, like chemotherapy',
            'Sensitivity of the scalp necessitating lightweight, breathable fabrics'
        ],
        whyChooseUsTitle: 'Why Choose Advanced Grohair Clinic?',
        whyChooseUs: ['Expertise and Innovation', 'Custom Craftsmanship', 'Medical-Grade Safety', 'Trusted by Thousands']
    },

    'men-full-cap': {
        title: 'Men Full Cap',
        image: menFullCapImg,
        whatIsTitle: 'What Exactly Is Men Full Cap?',
        whatIs: 'Men Full Cap is a non-surgical, custom hair replacement system for men experiencing complete hair loss from alopecia, chemotherapy, or other causes. It provides a full, natural-looking head of hair, seamlessly blending with your own, offering a comfortable, surgery-free solution for a youthful, fuller appearance.',
        howItWorksTitle: 'How Does Men Full Cap Work?',
        howItWorks: [
            { title: 'Consultation and Evaluation', description: 'It starts with a consultation where specialists analyze your hair loss and take precise scalp measurements to create a perfectly tailored Men Full Cap.' },
            { title: 'Customised Design and Fitting', description: 'After measurements, Men Full Cap is custom-designed for a perfect fit, with hair density, texture, color, and hairline tailored for a natural, full look, including seamless side locks.' },
            { title: 'Application and Styling', description: 'The Men Full Cap is securely attached with medical-grade adhesive or tape and professionally styled to blend naturally with your features.' },
            { title: 'Maintenance and Care', description: 'With regular cleaning and touch-ups, the Men Full Cap lasts for months, staying natural, secure, and long-lasting.' }
        ],
        benefitsTitle: 'Why Choose Men Full Cap?',
        benefits: [
            'Durable and Comfortable – Long-lasting and comfortable for daily wear.',
            'Pain-Free and Non-Surgical – A needle-free, painless alternative to traditional hair restoration.',
            'Natural Look and Feel – Made with high-quality hair for a realistic appearance that looks and feels natural.'
        ],
        conditionsTitle: 'This Treatment Helps With:',
        conditions: [
            'Total Hair Loss',
            'Scalp Sensitivity',
            'Confidence Boost',
            'Alopecia Universalis and Totalis'
        ],
        whyChooseUsTitle: 'Why Choose Advanced Grohair for Men Full Cap Hair System?',
        whyChooseUs: ['Customised and Personalised', 'Experienced Technicians', 'Private and Confidential Process', 'Pan-India Service and Aftercare']
    },

    'women-full-cap': {
        title: 'Women Full Cap System',
        image: womenFullCapImg,
        whatIsTitle: 'What Exactly Is the Women Full Cap System?',
        whatIs: "Women Full Cap System is a personalized, medical-quality hair replacement system intended for females experiencing complete to severe hair loss. Whether induced by Alopecia Universalis, Alopecia Totalis, or due to chemotherapy-related hair loss, this full-cap system is tailor-fitted specifically to your own individual shape of scalp. The end result? A natural, unnoticeable finish with complete scalp coverage and endless styling possibilities—so you feel like you once again.",
        howItWorksTitle: 'How Does the Women Full Cap System Work?',
        howItWorks: [
            { title: 'Personal Consultation & Scalp Analysis', description: 'Our experts begin with a one-to-one consultation to assess your scalp, understand your medical history, and identify your unique needs.' },
            { title: 'Bespoke Design & Construction', description: 'We then craft a full cap system matched to your scalp\'s size, shape, and areas of hair loss. You can select your preferred hair length, texture, density, and colour for a fully personalised result.' },
            { title: 'Fitting & Finishing Touches', description: 'Your custom unit is professionally fitted to ensure a secure, natural placement. Our stylists then shape and finish the hair to complement your features and style preferences.' },
            { title: 'Education, Care & Ongoing Support', description: 'We provide expert guidance on how to care for and maintain your full cap, ensuring you enjoy lasting confidence and comfort with every wear.' }
        ],
        benefitsTitle: 'Why Choose the Women Full Cap System?',
        benefits: [
            'Custom-Fit Design – Made to your exact measurements for a natural, seamless look.',
            'Unusually Natural Look – High-quality hair that looks and moves naturally.',
            'Light, Breathable, and Secure – Comfortable, all-day wear with a secure, non-slip fit.'
        ],
        conditionsTitle: 'What Conditions Does This Treatment Help With?',
        conditions: [
            'Alopecia Totalis and Alopecia Universalis',
            'Chemotherapy-related hair loss',
            'Severe or permanent hair thinning',
            'Scarring Alopecia'
        ],
        whyChooseUsTitle: 'Why Choose AdGro for Your Women Full Cap System?',
        whyChooseUs: ['100% Customised Approach', 'Premium Quality Materials', 'Trusted by Thousands', 'Ongoing Aftercare & Support']
    },

    // SPECIALTY
    'scalp-micropigmentation': {
        title: 'Scalp Micropigmentation',
        image: scalpMicropigImg,
        whatIsTitle: 'What Exactly is Scalp Micropigmentation?',
        whatIs: 'Scalp Micropigmentation (SMP) in Nagercoil is a painless cosmetic treatment that creates the appearance of fuller hair for thinning hair, alopecia, or pattern baldness in men and women. SMP uses tiny pigment dots to mimic hair follicles, enhancing hair density and defining the hairline. At AdGro, our experts customize pigment tone and design for the most natural results.',
        howItWorksTitle: 'How Does Scalp Micropigmentation Work?',
        howItWorks: [
            { title: 'Consultation & Personalised Plan', description: 'Treatment begins with a consultation at our Coimbatore clinic, where we assess your scalp, hair, and preferences, then create a personalized plan with the best-matched pigment.' },
            { title: 'The Pigmentation Session', description: 'Using a precise micro-needling device, tiny pigment dots are applied to mimic hair follicles, creating a freshly shaved look. Each session lasts 4–5 hours, depending on the area.' },
            { title: 'Follow-Up Session', description: 'A follow-up session is scheduled a few weeks after the initial procedure to add density, refine details, and ensure consistent, natural results.' },
            { title: 'Long-Lasting Transformation', description: 'Results from SMP are immediate and continue to improve with touch-ups. With proper care, your new look can last for years, requiring only minor refresh sessions over time.' }
        ],
        benefitsTitle: 'Why Choose Scalp Micropigmentation?',
        benefits: [
            'Immediate Visible Impact – Unlike many other treatments, SMP provides visible improvement right after the first session.',
            'Non-surgical and painless – This non-invasive procedure causes no cutting, scarring, or downtime, with minimal discomfort reported.',
            'Natural-looking results – Microdots mimicking real hair follicles for a fuller, denser appearance, especially at the hairline and crown.'
        ],
        conditionsTitle: 'What Conditions Does This Treatment Help With?',
        conditions: [
            'Male Pattern Baldness',
            'Female Thinning Hair',
            'Alopecia (Areata or Totalis)',
            'Hair Transplant Scarring',
            'General Hair Thinning'
        ],
        whyChooseUsTitle: 'Why Choose Advanced Grohair Clinic?',
        whyChooseUs: ['Expert Professionals', 'Safe Medical-Grade Pigments', 'Strict Safety Measures', 'Personalised Consultation']
    },

    'partial-alopecia': {
        title: 'Partial Alopecia Treatment',
        image: partialAlopeciaImg,
        whatIsTitle: 'What is Partial Alopecia Treatment?',
        whatIs: 'At Advanced Grohair Clinic, Nagercoil, we treat alopecia areata, which causes sudden hair loss in patches on the scalp, beard, or brows. Early, personalized, non-surgical treatments can stop further loss, reactivate follicles, and improve hair quality.',
        howItWorksTitle: 'How Does Partial Alopecia Treatment Work?',
        howItWorks: [
            { title: 'Comprehensive Consultation & Diagnosis', description: 'Your treatment begins with a full scalp and hair analysis, along with a thorough examination of your medical history, lifestyle, and diet. This enables us to establish partial alopecia and exclude other reasons for patchy baldness.' },
            { title: 'Personalised Treatment Plan', description: 'We design a treatment regimen tailored to your scalp\'s condition. Depending on your diagnosis, this may include PRP injections, microneedling, low-level laser therapy, and medicated topical applications. All solutions aim to stimulate the follicle, calm inflammation, and restore balance.' },
            { title: 'Active Procedure Phase', description: 'Each session is spaced to maximise hair regrowth. PRP nourishes the follicles with your own plasma, microneedling boosts scalp regeneration, and LLLT enhances blood circulation. Topicals work daily to support long-term recovery.' },
            { title: 'Maintenance & Monitoring', description: 'Ongoing sessions and regular reviews help us adapt the plan as needed. We track improvements in hair density, scalp health, and patient satisfaction, ensuring you stay on the right path to recovery.' }
        ],
        conditionsTitle: 'What Conditions Does This Treatment Help With?',
        conditions: [
            'Autoimmune-triggered alopecia areata',
            'Partial Alopecia for Patchy beard alopecia',
            'Partial Alopecia for Eyebrow hair thinning',
            'Post-inflammatory hair loss',
            'Stress-induced localised shedding'
        ],
        whyChooseUsTitle: 'Why Choose Advanced Grohair Clinic for Partial Alopecia Treatment in Nagercoil?',
        whyChooseUs: ['Science-driven, root-cause approach', 'Personalized, non-invasive treatments', 'Regular follow-ups for lasting results', 'Compassionate, stigma-free care']
    },

    'total-alopecia': {
        title: 'Total Alopecia Treatment',
        image: totalAlopeciaImg,
        whatIsTitle: 'What is Total Alopecia Treatment?',
        whatIs: "At AdGro, Nagercoil, we believe complete hair loss is not the end of your journey. Alopecia Totalis, a severe form of alopecia areata, causes full scalp hair loss, often due to autoimmune issues, stress, thyroid disease, or other conditions. It can progress rapidly and be emotionally difficult, but early treatment offers hope for regrowth. Our approach focuses on each patient's unique experience. We provide evidence-based, non-surgical treatments to stop hair loss, activate dormant follicles, and restore scalp health. Early diagnosis increases the chances of visible results.",
        howItWorksTitle: 'How Does Total Alopecia Treatment Work?',
        howItWorks: [
            { title: 'Comprehensive Assessment', description: 'Your treatment begins with a thorough consultation, in which we assess your scalp condition, medical history, hormonal markers, and autoimmune indicators. These are the cornerstones of your customised programme.' },
            { title: 'Stopping Hair Loss', description: 'We concentrate on stopping active hair loss by treating its root cause—whether inflammation, immune dysregulation, or lack of nutrients. Early management is important to prevent additional follicular damage.' },
            { title: 'Scalp Health Restoration', description: 'A balanced scalp is essential for hair to grow. Through the regulation of sebum, correction of pH, and reduction of chronic inflammation, we create an optimal environment for recovery.' },
            { title: 'Follicle Stimulation', description: 'Now comes the regrowth phase. Using cutting-edge technologies like LLLT, PRP, and topical growth enhancers, we encourage even the most stubborn follicles to re-enter the active growth cycle.' },
            { title: 'Maintenance & Monitoring', description: "Total Alopecia requires consistency. That's why we provide long-term guidance, track your progress with advanced scalp analysis, and adapt your treatment as needed for best outcomes." }
        ],
        conditionsTitle: 'What Conditions Does This Treatment Help With?',
        conditions: [
            'Rapidly progressive alopecia areata',
            'Stress-induced total hair shedding',
            'Therapy-induced hair loss',
            'Resistant scalp inflammation'
        ],
        whyChooseUsTitle: 'Why Choose AdGro for Total Alopecia in Nagercoil?',
        whyChooseUs: ['Adaptive treatment plans', 'In-depth root analysis', 'Advanced painless procedures', 'Ongoing care and support']
    },

    'microblading': {
        title: 'Microblading',
        image: microbladingImg,
        whatIsTitle: 'What is Microblading?',
        whatIs: 'Microblading is a semi-permanent cosmetics tattoo technique to shape and define the brows. The treatment deposits pigment in outer skin layers using a thin, handheld blade. The most recent technology injects micro hairline strokes that perfectly match the natural eyebrow hair texture to create fuller appearing, more defined brows. This treatment is most suited for individuals that prefer a long-lasting solution to thin or asymmetrical brows as opposed to the makeup process daily.',
        howItWorksTitle: 'How the Microblading Process Works?',
        howItWorks: [
            { title: 'Customised Consultation and Brow Mapping', description: 'Your journey starts with a consultation, during which our experienced experts evaluate your facial balance, bone structure, and your desired appearance. A tailored brow design is developed to complement your features and your desired appearance.' },
            { title: 'Precision Strokes of Pigment Application', description: 'With a sterile, hand-held microblade, our expert gently places pigment into the skin in short, controlled strokes that mimic the appearance of natural brow hairs.' },
            { title: 'Refining Sessions through Follow-Up', description: 'A few of follow-up appointments are scheduled for the greatest outcomes. These visits enable us to fine-tune the shape, color, or density according to how your skin holds pigment.' },
            { title: 'Recovery and Final Outcome', description: 'Healing usually takes about 7 to 14 days, with the brows progressing through phases of light darkening, peeling, and softening. The final results in colour and shape are seen after four to six weeks, once the pigment has settled in the skin. If aftercare is proper, it is possible for your new brows to last as long as two years.' }
        ],
        benefitsTitle: 'Why Choose Microblading?',
        benefits: [
            'Fuller, Defined Brows – Delicate strokes mimic natural hair for thicker, more defined brows.',
            'Promotes Natural Growth – Microblading enhances your brows without affecting natural hair growth.',
            'Fast & Low-Maintenance – Around three hours for lasting results.'
        ],
        conditionsTitle: 'What Conditions Does This Treatment Help With?',
        conditions: [
            'Thinning brows due to over-plucking, aging, or genetics.',
            'Asymmetrical brows lacking shape and definition.',
            'Hair loss caused by hormonal changes, illness, or trauma.',
            'The daily need to fill in or shape brows with makeup.',
            'A busy lifestyle leaving little time for beauty routines.'
        ]
    },

    'lip-micropigmentation': {
        title: 'Lip Micropigmentation',
        image: lipMicropigImg,
        whatIsTitle: 'What Exactly Is Lip Micropigmentation?',
        whatIs: 'Lip Micropigmentation is a semi-permanent cosmetic procedure that enhances natural lip color, shape, and symmetry by implanting pigment into the upper skin layer. It creates defined, fuller-looking lips without daily lipstick. Ideal for correcting uneven pigmentation, restoring faded color, or achieving youthful, natural lips, it also helps conceal scars or discoloration. Unlike traditional makeup, it offers a long-lasting, safe, and effective solution.',
        howItWorksTitle: 'How Does Lip Micropigmentation Work?',
        howItWorks: [
            { title: 'Consultation and Customisation', description: "First, our specialist will assess your lips' shape, tone, and fullness to customize your needs and select the ideal pigment shade that enhances your natural lip color and skin tone." },
            { title: 'Treatment Process', description: 'The treatment takes about 3 hours, with a local anesthetic applied for comfort. A fine instrument implants pigment into the skin, appearing darker at first but settling within weeks to a subtle, natural color.' },
            { title: 'Recovery and Follow-up', description: 'Mild swelling or soreness may occur but fades in 1–2 days. Final shape and color appear in 4–6 weeks as pigment settles. Two follow-up visits are included to adjust shape or color, ensuring complete satisfaction.' }
        ],
        benefitsTitle: 'Why Choose Lip Micropigmentation?',
        benefits: [
            'Youthful Appearance – The treatment instantly gives your lips a healthy, bright, and youthful look, making you feel fresher.',
            'Customised Just for You – Pigment colors are selected with care to highlight your individual lip color and preference.',
            'Immediate Results – Lip color and definition improve instantly, giving an instant confidence boost.'
        ],
        conditionsTitle: 'What Conditions Does This Treatment Help With?',
        conditions: [
            'Undefined Lip Borders',
            'Loss of Natural Lip Color with Aging',
            'Scarring or Discoloration on the Lips',
            'Need for More Voluptuous-Looking Lips Without Fillers'
        ],
        whyChooseUsTitle: 'Why Choose AdGro for Lip Micropigmentation?',
        whyChooseUs: ['1:1 Personalisation', 'Experienced Professionals', 'Aftercare & Support', 'Results That Speak for Themselves']
    },

    'eyelash-lift': {
        title: 'Eyelash Lift & Extensions',
        image: eyelashImg,
        whatIsTitle: 'What is Eyelash Lift and Extensions?',
        whatIs: 'At AdGro, we blend precise lash styling with medical-grade safety for a refreshed eye look. An eyelash lift curls and lifts your natural lashes for a longer, open-eyed appearance without falsies, giving immediate, natural results. Eyelash extensions add thin natural or synthetic lashes individually, creating length, fullness, and a smooth, dramatic finish.',
        howItWorksTitle: 'How the Process Works?',
        howItWorks: [
            { title: 'Expert Consultation', description: 'Every lash line is unique. That is why we begin with a customised consultation where our lash specialists find out your eye shape, the type of lashes, and your beauty goals to recommend the most appropriate course of action.' },
            { title: 'Lash Lift Application', description: 'For a lift, a specially formulated solution is swept across your lashes to curl them up gently at the root. This creates a naturally lifted effect that opens up your eyes and makes them appear more defined.' },
            { title: 'Lash Extensions (Optional)', description: 'With extensions, extremely light lash strands are glued one at a time onto each individual lash with skin-friendly adhesive. This provides fullness, dimension, and a beautiful, natural finish to your lash line.' },
            { title: 'Tinting Add-On (Optional)', description: 'Want to go darker or more defined? Add a lash or brow tint to deepen the pigment and enhance your final look—ideal for those who prefer a makeup-free routine.' },
            { title: 'Aftercare & Maintenance Guidance', description: 'After your treatment, we give you complete aftercare instructions so you can get the most benefit for as long as you can. We recommend refilling extensions every 3-4 weeks to keep the volume consistent.' }
        ],
        benefitsTitle: 'Why Eyelash Lift and Extensions?',
        benefits: [
            'Instant Gratification – Observe visible outcomes shortly after your session.',
            'Extended Wear – Enjoy long-lasting results for up to 2–3 months with proper aftercare.',
            "Safe and Painless – A comfortable process that doesn't entail surgery, pain, or downtime."
        ],
        conditionsTitle: 'What Conditions Does This Treatment Help With?',
        conditions: [
            'Straight or downward-lashed lids that require structure or curl',
            'Ongoing smudging or clumping of mascara',
            "Thin or fine eyelashes that don't play well with mascara",
            'Time-saving beauty regimens—ideal for career women or brides-to-be'
        ]
    },

    // RETENTION
    'mesotherapy': {
        title: 'Mesotherapy',
        image: hydrafacial2Img,
        whatIsTitle: 'What is Mesotherapy?',
        whatIs: 'Mesotherapy is a novel topical hair regenerating therapy that is used in pain-free hair restoration therapy. With mesotherapy, a special combination of vitamins, minerals, amino acids, and growth factors is injected into the scalp to promote hair root growth, stimulate the scalp with increased blood supply, and provide nutrition to the hair root. This therapy is especially great for people who have thinning hair, hair loss, and even hair loss at an early age. Pillowsing attacks the underlying causes of hair loss, while also creating the dormant follicles and initiating the natural process of regrowth of denser and healthier hair.',
        howItWorksTitle: 'How Does Mesotherapy Work?',
        howItWorks: [
            { title: 'Consultation & Scalp Assessment', description: 'Our qualified hair restoration experts examine your scalp condition, pattern of hair loss, and personal issues to create your own customised treatment protocol.' },
            { title: 'Nutrient Infusion Treatment', description: 'A nutrient-rich mix is injected into the scalp to nourish follicles, improve circulation, strengthen hair, and reduce hair loss.' },
            { title: 'Recovery & Results', description: 'Mesotherapy is a quick, no-downtime treatment. Mild redness may occur, with results visible in 4–6 weeks. A course of 4–8 sessions is recommended.' }
        ],
        benefitsTitle: 'Why Mesotherapy for Hair?',
        benefits: [
            'Promotes Hair Growth – It helps in activating the follicles and reduces hair breakage and hair thinning.',
            'Pain-Free & Non-Surgical — An office-based, high-energy, non-surgical intervention without incisions.',
            'No Downtime & Rapid Recovery – No interruption of routine; patients can return to work immediately.'
        ],
        conditionsTitle: 'What Conditions Does This Treatment Help With?',
        conditions: [
            'Androgenetic Alopecia',
            'Mesotherapy for Postpartum Hair Loss',
            'Age- or Hormone-Related Hair Thinning',
            'Stress-Induced Hair Shedding',
            'Poor Scalp Circulation & Weak Hair Growth'
        ],
        whyChooseUsTitle: 'Why Choose AdGro for Mesotherapy?',
        whyChooseUs: ['Expert-Led Procedures', 'Individualised Treatment Plans', 'New Technology & Techniques', 'Positive Results']
    },

    'prp-pro-x27': {
        title: 'PRP Pro+ Stem X27',
        image: prpProImg,
        whatIsTitle: 'What Exactly is PRP Pro+ for Hair?',
        whatIs: "PRP Pro+ (Platelet-Rich Plasma Therapy) is a non-drug, advanced treatment that uses the body's natural ability to fight baldness and boost growth. A small blood sample is processed in a centrifuge to extract platelet-rich plasma, rich in growth factors and proteins, which is then injected into thinning areas of the scalp. This stimulates healing, regenerates follicles, and reactivates dormant ones, making PRP Pro+ a safe, natural, and minimally invasive hair restoration option for both men and women.",
        howItWorksTitle: 'How Does PRP Pro+ for Hair Work?',
        howItWorks: [
            { title: 'Consultation & Scalp Analysis', description: 'Evaluate hair thinning pattern, scalp health, and overall suitability for PRP or Stem X27.' },
            { title: 'Blood Draw (10–20 ml)', description: 'Blood is collected under sterile and hygienic conditions.' },
            { title: 'PRP Extraction', description: 'PRP Pro+: High-speed centrifuge. Stem X27: Closed-casket system for ultra-pure PRP.' },
            { title: 'Targeted Injections', description: 'Activated PRP is injected precisely into thinning areas using fine micro-needles.' },
            { title: 'Recovery & Results', description: 'Mild redness may occur for a few hours. No downtime — resume daily activities immediately.' }
        ],
        benefitsTitle: 'Why Choose PRP Pro+ for Hair?',
        benefits: [
            'Stimulates Follicle Wake — Awakens dormant and miniaturised follicles to regrow hair.',
            'Makes Hair Fuller and Thicker – Results in thicker, more vibrant looking strands.',
            'Reduces Hair Shedding – It is excellent in controlling progressive hair loss and halting hair loss.'
        ],
        conditionsTitle: 'What Conditions Does This Treatment Help With?',
        conditions: [
            'Androgenetic Alopecia',
            'PRP Pro+ for Postpartum Hair Loss',
            'PRP Pro+ for Telogen Effluvium',
            'PRP Pro+ for Hair Thinning',
            'PRP Pro+ for Weak Hair'
        ],
        whyChooseUsTitle: 'Why Choose AdGro for PRP Pro+ Therapy?',
        whyChooseUs: ['Patient Comfort & Safety', 'Verified Results', 'Customised Treatment Plans', 'Sterile, In-House Processing']
    },

    'gel-prp': {
        title: 'Gel PRP',
        image: gelPrpImg,
        whatIsTitle: 'What is Gel PRP?',
        whatIs: "Gel PRP is an advanced form of Platelet-Rich Plasma therapy, processed into a gel for improved application and results. It accelerates tissue repair, stimulates collagen, and strengthens hair follicles via slow-release growth factors. Activated with thrombin, it forms a fibrin matrix that supports sustained growth factor release and cellular regeneration. This promotes healing, hair follicle regeneration, and reactivates dormant follicles, naturally triggering hair growth. PRP Pro+ is a safe, minimally invasive, all-natural option for men and women.",
        howItWorksTitle: 'How It Works:',
        howItWorks: [
            { title: 'Blood Collection', description: 'Blood is drawn from the patient and processed to isolate PRP.' },
            { title: 'Thrombin Activation', description: 'Thrombin is added to initiate the formation of a fibrin-rich matrix.' },
            { title: 'Gel Processing', description: 'The PRP is further processed into a gel form.' },
            { title: 'Application', description: 'The Gel PRP is applied topically or injected, depending on the treatment plan.' }
        ],
        benefitsTitle: 'Benefits of Gel PRP',
        benefits: [
            'Longer Growth Factor Release',
            'Fibrin Scaffold',
            'Versatile Application',
            'Natural & Safe'
        ]
    },

    'regen-pro-9': {
        title: 'Regen Pro 9',
        image: regenProImg,
        whatIsTitle: 'What is Regen Pro 9?',
        whatIs: "Regen Pro 9 is an advanced hair restoration kit that naturally revitalizes hair, activates dormant follicles, reduces hair loss, and enhances transplant results. Using growth factors from your blood and a fibrin matrix for sustained release, it promotes healing, follicle regeneration, and hair growth safely and minimally invasively for men and women.",
        howItWorksTitle: 'How It Works:',
        howItWorks: [
            { title: 'Blood Collection', description: 'Blood drawn from the patient.' },
            { title: 'GFC Extraction', description: 'Extraction of GFC, free from WBC/RBC.' },
            { title: 'Clotting & Centrifugation', description: 'Clotting & Centrifugation to separate active growth factors.' },
            { title: 'Targeted Scalp Injection', description: 'Targeted Scalp Injection for precise follicle activation.' }
        ],
        benefitsTitle: 'Why Regen Pro 9?',
        benefits: [
            'WBC & RBC-Free – Minimizes scalp irritation, inflammation, and discomfort.',
            'Enhanced Transplant Results – Improves follicle survival and growth.',
            "Natural & Safe – Uses your body's own regenerative cells.",
            'Visible Results – Stronger roots, reduced hair fall, and healthier regrowth.'
        ]
    },

    // NON-INVASIVE
    'oxygen-laser-therapy': {
        title: 'Oxygen Laser Therapy',
        image: oxygenLaserTherapyImg,
        whatIsTitle: 'What is Oxygen Laser Therapy?',
        whatIs: 'Oxygen Laser Therapy in Nagercoil is an advanced, non-invasive hair restoration treatment combining Low Level Laser Therapy (LLLT) with oxygenation to improve scalp health and stimulate natural growth. By boosting circulation, delivering nutrients, and reducing inflammation—a key cause of thinning—it reactivates dormant follicles. This painless, gentle, non-surgical therapy is among the safest and most effective options for thinning or early hair loss, helping restore denser, healthier hair.',
        howItWorksTitle: 'How Does Oxygen Laser Therapy Work?',
        howItWorks: [
            { title: 'Consultation & Scalp Assessment', description: 'Our team of trained hair specialists examines the scalp for patterns of hair loss, the health of hair follicles, and scalp conditions. Based on this analysis, a personalised treatment program is then devised.' },
            { title: 'Oxygen Laser Therapy Treatment', description: 'During treatment, Low Level Laser Therapy (LLLT) stimulates hair follicles and scalp circulation, while Oxygen Infusion Technology delivers nutrients, revitalizes roots, and reduces inflammation. Together, they hydrate the scalp and create the ideal environment for hair growth.' },
            { title: 'Recovery & Immediate Result', description: 'The treatment is painless with no recovery time. Within 2–4 weeks, most patients notice reduced dandruff and healthier scalps, while visible hair thickening appears in 4–6 weeks and improves with continued sessions.' }
        ],
        benefitsTitle: 'Why Choose Oxygen Laser Therapy for Hair?',
        benefits: [
            'No Downtime, No Discomfort – Adults can go back to normal activities immediately after treatment.',
            'Tailored to Your Needs – All treatments are customised based on scalp condition and hair problems.',
            'Lessens Dandruff & Scalp Sensitivity – Creates a healthier scalp surface, for long-term hair health.'
        ],
        conditionsTitle: 'What Conditions Does This Treatment Help With?',
        conditions: [
            'Hair Loss',
            'Postpartum Hair Loss',
            'Dandruff & Scalp Irritation',
            'Scalp circulation'
        ],
        whyChooseUsTitle: 'Why Choose Oxygen Laser Therapy at AdGro?',
        whyChooseUs: ['Expert-Led Hair Solutions', 'Customised Treatment Plans', 'Safe Treatments', 'Endorsed by Hundreds of Patients']
    }
};
