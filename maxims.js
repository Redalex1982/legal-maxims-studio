const LEGAL_MAXIMS = [
  {
    maxim: "Actus non facit reum nisi mens sit rea",
    meaning: "An act does not make a person guilty unless the mind is also guilty.",
    category: "Criminal Law",
    level: "Basic",
    context: "Foundation for actus reus and mens rea in criminal liability."
  },
  {
    maxim: "Actus reus",
    meaning: "The guilty act or prohibited conduct.",
    category: "Criminal Law",
    level: "Basic",
    context: "One of the main building blocks of criminal responsibility."
  },
  {
    maxim: "Mens rea",
    meaning: "The guilty mind or blameworthy mental state.",
    category: "Criminal Law",
    level: "Basic",
    context: "Often paired with actus reus to establish an offence."
  },
  {
    maxim: "Ignorantia juris non excusat",
    meaning: "Ignorance of the law is no excuse.",
    category: "General Principles",
    level: "Basic",
    context: "People are generally presumed to know the law."
  },
  {
    maxim: "Audi alteram partem",
    meaning: "Hear the other side.",
    category: "Natural Justice",
    level: "Basic",
    context: "A person affected by a decision should get a fair chance to be heard."
  },
  {
    maxim: "Nemo judex in causa sua",
    meaning: "No one should be a judge in their own cause.",
    category: "Natural Justice",
    level: "Basic",
    context: "The rule against bias in adjudication and administrative decisions."
  },
  {
    maxim: "Ubi jus ibi remedium",
    meaning: "Where there is a right, there is a remedy.",
    category: "Remedies",
    level: "Basic",
    context: "Courts should provide relief when a legal right is violated."
  },
  {
    maxim: "Res ipsa loquitur",
    meaning: "The thing speaks for itself.",
    category: "Tort Law",
    level: "Basic",
    context: "Negligence may be inferred from the nature of the accident."
  },
  {
    maxim: "Volenti non fit injuria",
    meaning: "No injury is done to one who voluntarily consents.",
    category: "Tort Law",
    level: "Basic",
    context: "Consent can defeat some tort claims."
  },
  {
    maxim: "Damnum sine injuria",
    meaning: "Damage without legal injury.",
    category: "Tort Law",
    level: "Basic",
    context: "Loss alone is not actionable unless a legal right is violated."
  },
  {
    maxim: "Injuria sine damno",
    meaning: "Legal injury without actual damage.",
    category: "Tort Law",
    level: "Basic",
    context: "Violation of a legal right can be actionable even without measurable loss."
  },
  {
    maxim: "Nemo dat quod non habet",
    meaning: "No one can give what they do not have.",
    category: "Property and Sale",
    level: "Basic",
    context: "A seller generally cannot transfer a better title than they possess."
  },
  {
    maxim: "Caveat emptor",
    meaning: "Let the buyer beware.",
    category: "Contract and Sale",
    level: "Basic",
    context: "The buyer must take reasonable care before purchase, subject to modern exceptions."
  },
  {
    maxim: "Pacta sunt servanda",
    meaning: "Agreements must be kept.",
    category: "Contract Law",
    level: "Basic",
    context: "A core idea behind contractual obligation."
  },
  {
    maxim: "Consensus ad idem",
    meaning: "Agreement to the same thing.",
    category: "Contract Law",
    level: "Basic",
    context: "Parties must have a meeting of minds for a valid contract."
  },
  {
    maxim: "Ex turpi causa non oritur actio",
    meaning: "No action arises from an immoral or illegal cause.",
    category: "Contract and Public Policy",
    level: "Intermediate",
    context: "Courts may refuse relief where the claim is founded on illegality."
  },
  {
    maxim: "In pari delicto potior est conditio possidentis",
    meaning: "Where parties are equally at fault, the possessor is in the stronger position.",
    category: "Equity",
    level: "Advanced",
    context: "Used when courts decline to help either side in an illegal bargain."
  },
  {
    maxim: "Qui facit per alium facit per se",
    meaning: "One who acts through another acts personally.",
    category: "Agency",
    level: "Intermediate",
    context: "Acts done by an agent may legally bind the principal."
  },
  {
    maxim: "Respondeat superior",
    meaning: "Let the superior answer.",
    category: "Agency and Employment",
    level: "Intermediate",
    context: "An employer may be liable for acts of an employee in the course of employment."
  },
  {
    maxim: "Vicarious liability",
    meaning: "Liability imposed on one person for the act of another.",
    category: "Agency and Employment",
    level: "Basic",
    context: "Common in employer-employee tort claims."
  },
  {
    maxim: "Stare decisis",
    meaning: "Stand by decided matters.",
    category: "Precedent",
    level: "Basic",
    context: "Courts follow binding precedent to maintain consistency."
  },
  {
    maxim: "Ratio decidendi",
    meaning: "The reason for the decision.",
    category: "Precedent",
    level: "Basic",
    context: "The binding legal principle in a judgment."
  },
  {
    maxim: "Obiter dicta",
    meaning: "Things said by the way.",
    category: "Precedent",
    level: "Basic",
    context: "Persuasive observations that are not the binding reason for decision."
  },
  {
    maxim: "Per incuriam",
    meaning: "Through lack of care.",
    category: "Precedent",
    level: "Intermediate",
    context: "A decision made in ignorance of binding law may lack precedential force."
  },
  {
    maxim: "Sub judice",
    meaning: "Under judicial consideration.",
    category: "Procedure",
    level: "Basic",
    context: "Used for matters pending before a court."
  },
  {
    maxim: "Res judicata",
    meaning: "A matter already judged.",
    category: "Procedure",
    level: "Intermediate",
    context: "Final judgments can prevent relitigation of the same issue or claim."
  },
  {
    maxim: "Functus officio",
    meaning: "Having performed the office.",
    category: "Procedure",
    level: "Intermediate",
    context: "A decision-maker may lack power to revisit a completed decision."
  },
  {
    maxim: "Locus standi",
    meaning: "The right or standing to bring a case.",
    category: "Procedure",
    level: "Basic",
    context: "A claimant must usually show sufficient connection to the dispute."
  },
  {
    maxim: "Prima facie",
    meaning: "At first sight or on its face.",
    category: "Evidence",
    level: "Basic",
    context: "Evidence sufficient unless contradicted or rebutted."
  },
  {
    maxim: "Onus probandi",
    meaning: "The burden of proof.",
    category: "Evidence",
    level: "Basic",
    context: "Identifies which party must prove a fact or claim."
  },
  {
    maxim: "Ei incumbit probatio qui dicit, non qui negat",
    meaning: "Proof lies on the one who asserts, not the one who denies.",
    category: "Evidence",
    level: "Intermediate",
    context: "A classic statement of the burden of proof."
  },
  {
    maxim: "Falsus in uno, falsus in omnibus",
    meaning: "False in one thing, false in everything.",
    category: "Evidence",
    level: "Intermediate",
    context: "A witness caught lying on one material point may be distrusted, though modern courts apply it cautiously."
  },
  {
    maxim: "Hearsay",
    meaning: "An out-of-court statement offered to prove the truth of what it asserts.",
    category: "Evidence",
    level: "Basic",
    context: "Often inadmissible unless an exception applies."
  },
  {
    maxim: "Best evidence rule",
    meaning: "The best available evidence should be produced when required.",
    category: "Evidence",
    level: "Intermediate",
    context: "Historically important in documentary proof."
  },
  {
    maxim: "Lex non cogit ad impossibilia",
    meaning: "The law does not compel the impossible.",
    category: "General Principles",
    level: "Intermediate",
    context: "A party is not expected to perform an impossible legal duty."
  },
  {
    maxim: "Lex prospicit non respicit",
    meaning: "The law looks forward, not backward.",
    category: "Interpretation",
    level: "Intermediate",
    context: "Supports prospective operation of laws unless retrospective intent is clear."
  },
  {
    maxim: "Generalia specialibus non derogant",
    meaning: "General provisions do not derogate from specific ones.",
    category: "Interpretation",
    level: "Advanced",
    context: "Specific statutory language usually prevails over a general provision."
  },
  {
    maxim: "Expressio unius est exclusio alterius",
    meaning: "The express mention of one thing excludes others.",
    category: "Interpretation",
    level: "Advanced",
    context: "A canon of construction used cautiously to infer exclusion."
  },
  {
    maxim: "Ejusdem generis",
    meaning: "Of the same kind.",
    category: "Interpretation",
    level: "Intermediate",
    context: "General words following specific words may be limited to the same class."
  },
  {
    maxim: "Noscitur a sociis",
    meaning: "A word is known by its companions.",
    category: "Interpretation",
    level: "Intermediate",
    context: "Meaning can be shaped by surrounding words."
  },
  {
    maxim: "Contemporanea expositio est optima et fortissima in lege",
    meaning: "Contemporaneous interpretation is best and strongest in law.",
    category: "Interpretation",
    level: "Advanced",
    context: "Old statutes may be understood through early official or practical interpretation."
  },
  {
    maxim: "Equity will not suffer a wrong without a remedy",
    meaning: "Equity seeks to provide relief for recognized wrongs.",
    category: "Equity",
    level: "Basic",
    context: "A guiding equitable principle, related to ubi jus ibi remedium."
  },
  {
    maxim: "He who seeks equity must do equity",
    meaning: "A claimant seeking equitable relief must act fairly.",
    category: "Equity",
    level: "Basic",
    context: "Equitable remedies may depend on the claimant's own conduct."
  },
  {
    maxim: "He who comes to equity must come with clean hands",
    meaning: "A claimant's improper conduct can bar equitable relief.",
    category: "Equity",
    level: "Basic",
    context: "Courts may deny relief when the claimant acted unconscionably in the matter."
  },
  {
    maxim: "Equity follows the law",
    meaning: "Equity supplements rather than casually overrides legal rules.",
    category: "Equity",
    level: "Intermediate",
    context: "Equitable doctrines usually operate within legal frameworks."
  },
  {
    maxim: "Equity acts in personam",
    meaning: "Equity acts against the person.",
    category: "Equity",
    level: "Advanced",
    context: "Equitable orders often bind a party personally, such as injunctions."
  },
  {
    maxim: "Delay defeats equity",
    meaning: "Unreasonable delay can defeat equitable relief.",
    category: "Equity",
    level: "Intermediate",
    context: "Related to the doctrine of laches."
  },
  {
    maxim: "Qui sentit commodum sentire debet et onus",
    meaning: "One who receives the benefit should also bear the burden.",
    category: "Equity",
    level: "Advanced",
    context: "Applied where fairness links benefits with obligations."
  },
  {
    maxim: "Bona fide",
    meaning: "In good faith.",
    category: "General Principles",
    level: "Basic",
    context: "Used across contract, property, corporate, and procedural law."
  },
  {
    maxim: "Mala fide",
    meaning: "In bad faith.",
    category: "General Principles",
    level: "Basic",
    context: "Indicates dishonest, improper, or ulterior conduct."
  },
  {
    maxim: "De minimis non curat lex",
    meaning: "The law does not concern itself with trifles.",
    category: "General Principles",
    level: "Basic",
    context: "Minor or trivial matters may not justify legal action."
  },
  {
    maxim: "Salus populi suprema lex",
    meaning: "The welfare of the people is the supreme law.",
    category: "Public Law",
    level: "Advanced",
    context: "Invoked in discussions of state necessity and public welfare."
  },
  {
    maxim: "Parens patriae",
    meaning: "Parent of the nation.",
    category: "Public Law",
    level: "Intermediate",
    context: "The state may protect those unable to protect themselves."
  },
  {
    maxim: "Habeas corpus",
    meaning: "You shall have the body.",
    category: "Public Law",
    level: "Basic",
    context: "A remedy against unlawful detention."
  },
  {
    maxim: "Mandamus",
    meaning: "We command.",
    category: "Public Law",
    level: "Basic",
    context: "A writ directing a public authority to perform a legal duty."
  },
  {
    maxim: "Certiorari",
    meaning: "To be certified or informed.",
    category: "Public Law",
    level: "Intermediate",
    context: "A superior court may review and quash an inferior body's decision."
  },
  {
    maxim: "Prohibition",
    meaning: "A command to stop acting beyond jurisdiction.",
    category: "Public Law",
    level: "Intermediate",
    context: "Prevents an inferior court or tribunal from exceeding authority."
  },
  {
    maxim: "Quo warranto",
    meaning: "By what authority.",
    category: "Public Law",
    level: "Intermediate",
    context: "Questions a person's legal authority to hold public office."
  },
  {
    maxim: "Delegatus non potest delegare",
    meaning: "A delegate cannot further delegate.",
    category: "Administrative Law",
    level: "Intermediate",
    context: "A delegated power must generally be exercised by the delegate personally."
  },
  {
    maxim: "Ultra vires",
    meaning: "Beyond the powers.",
    category: "Administrative and Corporate Law",
    level: "Basic",
    context: "An act done outside legal authority may be invalid."
  },
  {
    maxim: "Intra vires",
    meaning: "Within the powers.",
    category: "Administrative and Corporate Law",
    level: "Basic",
    context: "An act performed within legal authority."
  },
  {
    maxim: "Sine qua non",
    meaning: "An indispensable condition.",
    category: "Causation",
    level: "Intermediate",
    context: "Used in causation analysis: but for this condition, the result would not occur."
  },
  {
    maxim: "Causa causans",
    meaning: "The immediate or effective cause.",
    category: "Causation",
    level: "Advanced",
    context: "Distinguishes a real operative cause from a remote cause."
  },
  {
    maxim: "Causa sine qua non",
    meaning: "A necessary cause without which the result would not happen.",
    category: "Causation",
    level: "Advanced",
    context: "Used to test factual causation."
  },
  {
    maxim: "Novus actus interveniens",
    meaning: "A new intervening act.",
    category: "Causation",
    level: "Intermediate",
    context: "An intervening event may break the chain of causation."
  },
  {
    maxim: "Pro bono publico",
    meaning: "For the public good.",
    category: "Legal Profession",
    level: "Basic",
    context: "Usually refers to legal work done without fee for public benefit."
  },
  {
    maxim: "Amicus curiae",
    meaning: "Friend of the court.",
    category: "Procedure",
    level: "Basic",
    context: "A non-party assisting the court with expertise or perspective."
  },
  {
    maxim: "Ex parte",
    meaning: "From one side only.",
    category: "Procedure",
    level: "Basic",
    context: "A hearing or application made without the other party present."
  },
  {
    maxim: "Inter alia",
    meaning: "Among other things.",
    category: "Legal Writing",
    level: "Basic",
    context: "Common phrase in pleadings, statutes, and judgments."
  },
  {
    maxim: "Ipso facto",
    meaning: "By the fact itself.",
    category: "Legal Writing",
    level: "Basic",
    context: "Indicates a consequence follows automatically from a fact."
  },
  {
    maxim: "In limine",
    meaning: "At the threshold.",
    category: "Procedure",
    level: "Intermediate",
    context: "A matter considered at the outset, often before trial."
  },
  {
    maxim: "Status quo",
    meaning: "The existing state of affairs.",
    category: "Procedure",
    level: "Basic",
    context: "Courts may preserve the status quo until final decision."
  },
  {
    maxim: "Suo motu",
    meaning: "On its own motion.",
    category: "Procedure",
    level: "Intermediate",
    context: "A court acts without a party's request."
  },
  {
    maxim: "In camera",
    meaning: "In private.",
    category: "Procedure",
    level: "Basic",
    context: "Proceedings held away from the public."
  },
  {
    maxim: "Ad hoc",
    meaning: "For this specific purpose.",
    category: "Legal Writing",
    level: "Basic",
    context: "A committee, appointment, or arrangement created for a particular case."
  },
  {
    maxim: "Ad valorem",
    meaning: "According to value.",
    category: "Tax and Commercial Law",
    level: "Intermediate",
    context: "Duties or taxes calculated as a percentage of value."
  },
  {
    maxim: "Animus possidendi",
    meaning: "Intention to possess.",
    category: "Property Law",
    level: "Intermediate",
    context: "Relevant to possession and adverse possession."
  },
  {
    maxim: "Corpus possessionis",
    meaning: "Physical control of property.",
    category: "Property Law",
    level: "Advanced",
    context: "The physical element of possession, often paired with animus."
  },
  {
    maxim: "Adverse possession",
    meaning: "Possession hostile to the true owner's title for the required period.",
    category: "Property Law",
    level: "Intermediate",
    context: "Can mature into title if statutory conditions are met."
  },
  {
    maxim: "Nemo debet bis vexari pro una et eadem causa",
    meaning: "No one should be troubled twice for the same cause.",
    category: "Procedure",
    level: "Advanced",
    context: "Supports finality, res judicata, and protection against repeated litigation."
  },
  {
    maxim: "Nemo tenetur seipsum accusare",
    meaning: "No one is bound to accuse themselves.",
    category: "Criminal Law",
    level: "Advanced",
    context: "Foundation for privilege against self-incrimination."
  },
  {
    maxim: "Nullum crimen, nulla poena sine lege",
    meaning: "No crime and no penalty without law.",
    category: "Criminal Law",
    level: "Advanced",
    context: "Criminal liability requires prior legal definition."
  },
  {
    maxim: "Autrefois acquit",
    meaning: "Previously acquitted.",
    category: "Criminal Law",
    level: "Intermediate",
    context: "A plea that a person has already been acquitted of the same offence."
  },
  {
    maxim: "Autrefois convict",
    meaning: "Previously convicted.",
    category: "Criminal Law",
    level: "Intermediate",
    context: "A plea that a person has already been convicted of the same offence."
  },
  {
    maxim: "In dubio pro reo",
    meaning: "When in doubt, decide for the accused.",
    category: "Criminal Law",
    level: "Advanced",
    context: "Reflects the benefit of doubt in criminal adjudication."
  },
  {
    maxim: "Qui facit malum odit lucem",
    meaning: "One who does evil hates the light.",
    category: "Evidence",
    level: "Advanced",
    context: "Sometimes used to describe consciousness of guilt."
  },
  {
    maxim: "Alibi",
    meaning: "Elsewhere.",
    category: "Criminal Law",
    level: "Basic",
    context: "A defence that the accused was somewhere else when the offence occurred."
  },
  {
    maxim: "Corpus delicti",
    meaning: "The body of the crime.",
    category: "Criminal Law",
    level: "Intermediate",
    context: "The fact that a crime has actually been committed."
  },
  {
    maxim: "De novo",
    meaning: "Anew or from the beginning.",
    category: "Procedure",
    level: "Basic",
    context: "A fresh hearing or review."
  },
  {
    maxim: "Ex post facto",
    meaning: "After the fact.",
    category: "Public Law",
    level: "Intermediate",
    context: "Often used for retroactive criminal laws, which are usually restricted."
  },
  {
    maxim: "Lex loci contractus",
    meaning: "The law of the place where the contract was made.",
    category: "Conflict of Laws",
    level: "Advanced",
    context: "A connecting factor in private international law."
  },
  {
    maxim: "Lex loci delicti",
    meaning: "The law of the place where the wrong occurred.",
    category: "Conflict of Laws",
    level: "Advanced",
    context: "Used in cross-border tort disputes."
  },
  {
    maxim: "Lex situs",
    meaning: "The law of the place where property is situated.",
    category: "Conflict of Laws",
    level: "Advanced",
    context: "Important for immovable property disputes."
  },
  {
    maxim: "Comity",
    meaning: "Mutual respect between courts, states, or jurisdictions.",
    category: "Conflict of Laws",
    level: "Intermediate",
    context: "Supports recognition of foreign judgments and cooperation."
  },
  {
    maxim: "Vis major",
    meaning: "A superior force or act of God.",
    category: "Tort and Contract Law",
    level: "Basic",
    context: "Used for events beyond human control, such as natural disasters."
  },
  {
    maxim: "Nudum pactum",
    meaning: "A bare promise without consideration.",
    category: "Contract Law",
    level: "Intermediate",
    context: "A promise may be unenforceable if it lacks consideration."
  },
  {
    maxim: "Lex loci",
    meaning: "The law of the place.",
    category: "Conflict of Laws",
    level: "Intermediate",
    context: "A general connecting phrase used in private international law."
  },
  {
    maxim: "Lex fori",
    meaning: "The law of the forum or court hearing the case.",
    category: "Conflict of Laws",
    level: "Intermediate",
    context: "Procedural issues are often governed by the law of the forum court."
  },
  {
    maxim: "Inter vivos",
    meaning: "Between living persons.",
    category: "Property and Succession",
    level: "Intermediate",
    context: "Used for transfers or gifts made during the lifetime of the parties."
  },
  {
    maxim: "In pari materia",
    meaning: "On the same subject matter.",
    category: "Interpretation",
    level: "Intermediate",
    context: "Statutes dealing with the same subject may be read together."
  },
  {
    maxim: "Ex injuria jus non oritur",
    meaning: "A legal right does not arise from a wrongful act.",
    category: "General Principles",
    level: "Advanced",
    context: "A person should not profit legally from their own wrong."
  },
  {
    maxim: "Doli incapax",
    meaning: "Incapable of criminal intent.",
    category: "Criminal Law",
    level: "Intermediate",
    context: "Commonly used for children below the age of criminal responsibility."
  },
  {
    maxim: "Ignorantia facti excusat",
    meaning: "Ignorance of fact may excuse.",
    category: "Criminal Law",
    level: "Intermediate",
    context: "A genuine mistake of fact can sometimes be a defence."
  },
  {
    maxim: "In rem",
    meaning: "Against the thing or against the world at large.",
    category: "Procedure",
    level: "Intermediate",
    context: "Contrasts with in personam actions against a specific person."
  },
  {
    maxim: "In personam",
    meaning: "Against a specific person.",
    category: "Procedure",
    level: "Intermediate",
    context: "Personal obligations or orders bind identified parties."
  },
  {
    maxim: "Mutatis mutandis",
    meaning: "With necessary changes having been made.",
    category: "Legal Writing",
    level: "Intermediate",
    context: "Used when applying a rule or clause with suitable modifications."
  },
  {
    maxim: "Pendente lite",
    meaning: "During litigation.",
    category: "Procedure",
    level: "Intermediate",
    context: "Describes rights, transfers, or orders while a case is pending."
  },
  {
    maxim: "Pari passu",
    meaning: "On equal footing.",
    category: "Commercial Law",
    level: "Intermediate",
    context: "Often used for equal ranking of creditors, securities, or claims."
  },
  {
    maxim: "Quid pro quo",
    meaning: "Something for something.",
    category: "Contract Law",
    level: "Basic",
    context: "A simple expression of exchange, bargain, or consideration."
  },
  {
    maxim: "Void ab initio",
    meaning: "Void from the beginning.",
    category: "Contract Law",
    level: "Basic",
    context: "An agreement treated as invalid from the moment it was made."
  },
  {
    maxim: "Sic utere tuo ut alienum non laedas",
    meaning: "Use your property so as not to injure another's.",
    category: "Tort and Property Law",
    level: "Advanced",
    context: "A classic basis for nuisance and neighbour-related liability."
  },
  {
    maxim: "Qui prior est tempore potior est jure",
    meaning: "The first in time is stronger in law.",
    category: "Property Law",
    level: "Advanced",
    context: "Earlier rights may prevail over later competing rights."
  },
  {
    maxim: "Rex non potest peccare",
    meaning: "The king can do no wrong.",
    category: "Public Law",
    level: "Advanced",
    context: "Historical phrase linked to sovereign immunity, now limited by modern law."
  },
  {
    maxim: "Jus naturale",
    meaning: "Natural law or natural justice.",
    category: "Natural Justice",
    level: "Intermediate",
    context: "Refers to principles considered inherent in justice and reason."
  },
  {
    maxim: "Jus cogens",
    meaning: "A peremptory norm from which no derogation is allowed.",
    category: "International Law",
    level: "Advanced",
    context: "Used for fundamental international law norms."
  },
  {
    maxim: "Jus in rem",
    meaning: "A right available against the world at large.",
    category: "Rights and Remedies",
    level: "Intermediate",
    context: "Property rights are commonly described as rights in rem."
  },
  {
    maxim: "Jus in personam",
    meaning: "A right available against a particular person.",
    category: "Rights and Remedies",
    level: "Intermediate",
    context: "Contractual rights are commonly rights in personam."
  },
  {
    maxim: "Ad litem",
    meaning: "For the suit or legal action.",
    category: "Procedure",
    level: "Intermediate",
    context: "Used in phrases such as guardian ad litem."
  },
  {
    maxim: "Affidavit",
    meaning: "A written statement sworn or affirmed to be true.",
    category: "Procedure and Evidence",
    level: "Basic",
    context: "Commonly used as evidence in applications and proceedings."
  },
  {
    maxim: "Accomplice",
    meaning: "A person who knowingly assists or participates in a crime.",
    category: "Criminal Law",
    level: "Basic",
    context: "Accomplice evidence and liability are common legal aptitude topics."
  },
  {
    maxim: "Accused",
    meaning: "A person charged with an offence.",
    category: "Criminal Law",
    level: "Basic",
    context: "A basic criminal procedure term used throughout legal passages."
  },
  {
    maxim: "Bail",
    meaning: "Release of an accused person from custody, usually with conditions.",
    category: "Criminal Procedure",
    level: "Basic",
    context: "Frequently appears in criminal law and constitutional liberty passages."
  },
  {
    maxim: "Cognizable offence",
    meaning: "An offence for which police may arrest without warrant.",
    category: "Criminal Procedure",
    level: "Intermediate",
    context: "A common Indian criminal procedure term."
  },
  {
    maxim: "Non-cognizable offence",
    meaning: "An offence for which police generally need a warrant to arrest.",
    category: "Criminal Procedure",
    level: "Intermediate",
    context: "Contrasts with cognizable offences in Indian procedure."
  },
  {
    maxim: "Bailable offence",
    meaning: "An offence where bail is available as a matter of right.",
    category: "Criminal Procedure",
    level: "Basic",
    context: "Often contrasted with non-bailable offences."
  },
  {
    maxim: "Non-bailable offence",
    meaning: "An offence where bail is subject to court discretion.",
    category: "Criminal Procedure",
    level: "Basic",
    context: "Does not mean bail is impossible; it means it is not automatic."
  },
  {
    maxim: "FIR",
    meaning: "First Information Report.",
    category: "Criminal Procedure",
    level: "Basic",
    context: "The recorded first information about a cognizable offence."
  },
  {
    maxim: "Charge sheet",
    meaning: "A police report filed after investigation.",
    category: "Criminal Procedure",
    level: "Basic",
    context: "Sets out accusations and evidence for prosecution."
  },
  {
    maxim: "Plea bargaining",
    meaning: "An accused agrees to plead guilty in exchange for a concession.",
    category: "Criminal Procedure",
    level: "Intermediate",
    context: "A settlement-like mechanism in criminal procedure."
  },
  {
    maxim: "Public prosecutor",
    meaning: "A lawyer who represents the state in criminal proceedings.",
    category: "Criminal Procedure",
    level: "Basic",
    context: "A common role in criminal law passages."
  },
  {
    maxim: "Injunction",
    meaning: "A court order requiring a person to do or stop doing something.",
    category: "Remedies",
    level: "Basic",
    context: "May be temporary, permanent, mandatory, or prohibitory."
  },
  {
    maxim: "Specific performance",
    meaning: "A court order requiring performance of a contractual promise.",
    category: "Remedies",
    level: "Intermediate",
    context: "An equitable remedy where damages may be inadequate."
  },
  {
    maxim: "Damages",
    meaning: "Monetary compensation awarded for loss or injury.",
    category: "Remedies",
    level: "Basic",
    context: "A standard civil remedy."
  },
  {
    maxim: "Restitution",
    meaning: "Restoring a party to the position they were in before unjust loss or gain.",
    category: "Remedies",
    level: "Intermediate",
    context: "Often linked to unjust enrichment."
  },
  {
    maxim: "Fiduciary",
    meaning: "A person who must act for another with trust, loyalty, and good faith.",
    category: "Equity",
    level: "Intermediate",
    context: "Trustees, directors, agents, and lawyers may owe fiduciary duties."
  },
  {
    maxim: "Malice",
    meaning: "Improper motive or ill will.",
    category: "Tort and Criminal Law",
    level: "Basic",
    context: "Relevant in defamation, malicious prosecution, and some offences."
  },
  {
    maxim: "Innuendo",
    meaning: "An indirect or implied defamatory meaning.",
    category: "Tort Law",
    level: "Intermediate",
    context: "Used in defamation where words carry a hidden defamatory sense."
  },
  {
    maxim: "Libel",
    meaning: "Defamation in a permanent or written form.",
    category: "Tort Law",
    level: "Basic",
    context: "Contrasts with slander."
  },
  {
    maxim: "Slander",
    meaning: "Defamation in spoken or temporary form.",
    category: "Tort Law",
    level: "Basic",
    context: "A common legal term in defamation passages."
  },
  {
    maxim: "Negligence",
    meaning: "Failure to take reasonable care, causing legally recognized harm.",
    category: "Tort Law",
    level: "Basic",
    context: "One of the most common CLAT legal reasoning themes."
  },
  {
    maxim: "Nuisance",
    meaning: "Unreasonable interference with use or enjoyment of land, or public rights.",
    category: "Tort Law",
    level: "Basic",
    context: "May be private or public nuisance."
  },
  {
    maxim: "Trespass",
    meaning: "Direct and unlawful interference with person, property, or land.",
    category: "Tort Law",
    level: "Basic",
    context: "Commonly tested through factual application."
  },
  {
    maxim: "Strict liability",
    meaning: "Liability without proof of fault in certain dangerous activities.",
    category: "Tort Law",
    level: "Intermediate",
    context: "Associated with rule in Rylands v Fletcher."
  },
  {
    maxim: "Absolute liability",
    meaning: "Liability without exceptions for hazardous or inherently dangerous activity.",
    category: "Tort Law",
    level: "Intermediate",
    context: "An Indian law development associated with enterprise liability."
  },
  {
    maxim: "Consideration",
    meaning: "Something of value exchanged for a contractual promise.",
    category: "Contract Law",
    level: "Basic",
    context: "A basic requirement for enforceability in many contract systems."
  },
  {
    maxim: "Offer",
    meaning: "A clear proposal intended to create legal obligations if accepted.",
    category: "Contract Law",
    level: "Basic",
    context: "The starting point of contract formation."
  },
  {
    maxim: "Acceptance",
    meaning: "Assent to the terms of an offer.",
    category: "Contract Law",
    level: "Basic",
    context: "Acceptance must generally match the offer."
  },
  {
    maxim: "Novation",
    meaning: "Substitution of a new contract or obligation for an old one.",
    category: "Contract Law",
    level: "Intermediate",
    context: "May replace parties or obligations with consent."
  },
  {
    maxim: "Intestate",
    meaning: "Dying without leaving a valid will.",
    category: "Family and Succession",
    level: "Basic",
    context: "Property then passes according to succession law."
  },
  {
    maxim: "Testate",
    meaning: "Dying with a valid will.",
    category: "Family and Succession",
    level: "Basic",
    context: "Contrasts with intestate succession."
  },
  {
    maxim: "Pecuniary jurisdiction",
    meaning: "Court jurisdiction based on monetary value.",
    category: "Procedure",
    level: "Basic",
    context: "Determines which court can hear a case based on claim value."
  },
  {
    maxim: "Territorial jurisdiction",
    meaning: "Court jurisdiction based on geographic area.",
    category: "Procedure",
    level: "Basic",
    context: "A court must have authority over the place or parties."
  },
  {
    maxim: "Appellate jurisdiction",
    meaning: "Power of a court to hear appeals.",
    category: "Procedure",
    level: "Basic",
    context: "Contrasts with original jurisdiction."
  },
  {
    maxim: "Original jurisdiction",
    meaning: "Power of a court to hear a case at first instance.",
    category: "Procedure",
    level: "Basic",
    context: "The court where proceedings begin."
  },
  {
    maxim: "Judicial review",
    meaning: "Court review of legislative or executive action for legality or constitutionality.",
    category: "Public Law",
    level: "Basic",
    context: "A core constitutional law concept for CLAT."
  },
  {
    maxim: "Writ",
    meaning: "A formal court order.",
    category: "Public Law",
    level: "Basic",
    context: "Includes habeas corpus, mandamus, certiorari, prohibition, and quo warranto."
  },
  {
    maxim: "Fundamental rights",
    meaning: "Basic constitutional rights protected against state action.",
    category: "Constitutional Law",
    level: "Basic",
    context: "Frequently appears in public law and current legal issue passages."
  },
  {
    maxim: "Directive Principles of State Policy",
    meaning: "Constitutional governance principles guiding the state.",
    category: "Constitutional Law",
    level: "Basic",
    context: "Generally non-justiciable but important for policy and interpretation."
  },
  {
    maxim: "Separation of powers",
    meaning: "Division of government power among legislature, executive, and judiciary.",
    category: "Constitutional Law",
    level: "Basic",
    context: "A frequent theme in constitutional reasoning passages."
  },
  {
    maxim: "Rule of law",
    meaning: "Government and citizens are subject to law, not arbitrary power.",
    category: "Constitutional Law",
    level: "Basic",
    context: "A foundational public law principle."
  },
  {
    maxim: "Natural justice",
    meaning: "Basic fairness in decision-making.",
    category: "Natural Justice",
    level: "Basic",
    context: "Includes hearing the other side and rule against bias."
  }
];
