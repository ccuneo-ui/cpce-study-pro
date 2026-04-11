const CAREER_QUESTIONS = [
  {
    domain: "Career Development",
    question: "Holland's RIASEC theory identifies six personality types. Which type is characterized by preference for working with people, communication, and persuasion?",
    options: [
      "A) Realistic",
      "B) Investigative",
      "C) Enterprising",
      "D) Conventional"
    ],
    correct: 2,
    explanation: "The Enterprising type in Holland's RIASEC model is oriented toward leadership, persuasion, sales, and working with people in positions of influence. This contrasts with Realistic (hands-on/technical), Investigative (analytical/research), Artistic (creative), Social (helping/teaching), and Conventional (organized/detail-oriented) types."
  },
  {
    domain: "Career Development",
    question: "According to Donald Super's life-span, life-space theory, in which career development stage is an individual primarily focusing on choosing an occupation and preparing for work?",
    options: [
      "A) Growth stage",
      "B) Exploration stage",
      "C) Establishment stage",
      "D) Maintenance stage"
    ],
    correct: 1,
    explanation: "The Exploration stage (roughly ages 15-24) is when individuals actively explore vocational interests, values, and abilities before committing to a career choice. This follows the Growth stage and precedes the Establishment stage where workers build stability in their chosen occupation."
  },
  {
    domain: "Career Development",
    question: "Which career development theorist emphasized that career choice is a continuous process of learning through observation, feedback, and reinforcement?",
    options: [
      "A) Frank Parsons",
      "B) John Krumboltz",
      "C) Gottfredson",
      "D) Roe"
    ],
    correct: 1,
    explanation: "John Krumboltz's Social Learning Theory of Career Selection (SLTCS) emphasizes that career interests and choices are learned through social and environmental influences, classical conditioning, and reinforcement. This contrasts with trait-factor approaches that view interests as stable traits."
  },
  {
    domain: "Career Development",
    question: "In Gottfredson's theory of circumscription and compromise, what does 'circumscription' refer to?",
    options: [
      "A) Accepting a less-preferred career due to practical constraints",
      "B) Progressively eliminating career options as self-concept develops",
      "C) The social pressure that limits career exploration",
      "D) The economic factors that restrict job availability"
    ],
    correct: 1,
    explanation: "Circumscription is the process of progressively eliminating career options as a child develops a self-concept and becomes aware of social norms and gender expectations. This narrowing occurs before 'compromise,' where individuals accept less-preferred options due to practical barriers."
  },
  {
    domain: "Career Development",
    question: "Social Cognitive Career Theory (SCCT), developed by Lent, Brown, and Hackett, proposes that career choice is influenced by which three key factors?",
    options: [
      "A) Personality type, family influence, and socioeconomic status",
      "B) Self-efficacy beliefs, outcome expectations, and personal goals",
      "C) Work values, aptitudes, and previous work experience",
      "D) Intelligence, interests, and environmental opportunity"
    ],
    correct: 1,
    explanation: "SCCT identifies self-efficacy (belief in one's capability), outcome expectations (anticipated consequences of actions), and personal goals as the primary factors influencing career interests and choices. These cognitive variables interact with contextual and learning factors to shape career development."
  },
  {
    domain: "Career Development",
    question: "Frank Parsons' trait-factor theory of career counseling involves three main steps. Which is NOT one of these steps?",
    options: [
      "A) Understanding oneself: abilities, aptitudes, interests, and values",
      "B) Developing self-esteem and confidence through positive reinforcement",
      "C) Learning about occupations and the world of work",
      "D) Making a logical match between personal characteristics and job requirements"
    ],
    correct: 1,
    explanation: "Parsons' classic three-step approach consists of: (1) self-understanding, (2) occupational knowledge, and (3) matching. While modern counseling incorporates self-esteem building, this was not part of Parsons' original trait-factor model, which focused on logical matching of characteristics to requirements."
  },
  {
    domain: "Career Development",
    question: "Which career assessment tool measures six dimensions of vocational interests and is based on Holland's RIASEC typology?",
    options: [
      "A) Strong Interest Inventory (SII)",
      "B) Self-Directed Search (SDS)",
      "C) Myers-Briggs Type Indicator (MBTI)",
      "D) Career Beliefs Inventory (CBI)"
    ],
    correct: 1,
    explanation: "The Self-Directed Search (SDS), developed by John Holland, directly assesses interests in the six RIASEC dimensions and provides career suggestions based on the respondent's profile. While the Strong Interest Inventory also uses Holland codes, the SDS is most directly based on his theory and allows self-administration."
  },
  {
    domain: "Career Development",
    question: "The Strong Interest Inventory (SII) compares an individual's interests to those of satisfied workers in various occupations. What is this comparison approach called?",
    options: [
      "A) Criterion-keying",
      "B) Factor analysis",
      "C) Norm-referencing",
      "D) Validity checking"
    ],
    correct: 0,
    explanation: "Criterion-keying involves developing test items by identifying which responses differentiate between satisfied workers in an occupation and the general population. This empirical approach strengthens the SII's predictive validity for vocational satisfaction."
  },
  {
    domain: "Career Development",
    question: "According to work adjustment theory (Dawis & Lofquist), career satisfaction and stability depend on the match between which two elements?",
    options: [
      "A) Individual abilities and job requirements",
      "B) Individual needs and environmental reinforcers",
      "C) Personality type and organizational culture",
      "D) Career expectations and actual earnings"
    ],
    correct: 1,
    explanation: "Work adjustment theory posits that job satisfaction and tenure result from congruence between an individual's needs and the reinforcers available in the work environment. Conversely, poor fit in either direction (unmet needs or poor ability-requirement match) leads to dissatisfaction and job change."
  },
  {
    domain: "Career Development",
    question: "Anne Roe's needs theory of career development proposes that vocational interests and choices are rooted in which primary influence?",
    options: [
      "A) Parental occupational status",
      "B) Early childhood experiences and need gratification",
      "C) Cognitive ability and intelligence",
      "D) Socioeconomic constraints and opportunity"
    ],
    correct: 1,
    explanation: "Roe theorized that early family interactions and how needs were satisfied (or frustrated) in childhood shape personality development and subsequently influence vocational interests and choices. Her work emphasized the importance of childhood family dynamics in career development."
  },
  {
    domain: "Career Development",
    question: "Which of the following BEST describes the relationship between self-concept and career choice according to Super's theory?",
    options: [
      "A) Self-concept remains stable and determines career choices early in life",
      "B) Self-concept develops through life stages and is expressed through career choices",
      "C) Self-concept has minimal impact on career decisions compared to external factors",
      "D) Self-concept and career choice are unrelated processes that develop independently"
    ],
    correct: 1,
    explanation: "Super proposed that self-concept evolves through developmental stages and individuals seek careers that allow them to express and implement their emerging self-concept. Career choice is thus a means of self-expression that changes as the self-concept matures."
  },
  {
    domain: "Career Development",
    question: "In the career decision-making model of Tiedeman and O'Hara, the 'exploration' substage of the anticipation phase involves which primary activity?",
    options: [
      "A) Committing to a specific career choice",
      "B) Narrowing options and clarifying values and interests",
      "C) Reflecting on the decision and adjusting as needed",
      "D) Implementing the career plan through job search"
    ],
    correct: 1,
    explanation: "Tiedeman and O'Hara's model includes anticipation (exploration, crystallization, choice, clarification) and adjustment (induction, reformation) phases. During exploration, individuals actively gather information about careers that match their developing interests and values."
  },
  {
    domain: "Career Development",
    question: "The Myers-Briggs Type Indicator (MBTI) is sometimes used in career counseling. However, what is a significant limitation of using MBTI as a primary career assessment tool?",
    options: [
      "A) It lacks reliability and test-retest stability",
      "B) It has weak evidence linking personality types to career satisfaction or success",
      "C) It cannot differentiate between introversion and extraversion",
      "D) It is inappropriate for use with diverse populations"
    ],
    correct: 1,
    explanation: "While MBTI has appeal in career contexts, research does not consistently demonstrate that personality type predicts career satisfaction, performance, or longevity. Interest inventories with stronger empirical vocational validity (like SII or SDS) are preferred as primary career assessment tools."
  },
  {
    domain: "Career Development",
    question: "The O*NET (Occupational Information Network) system classifies occupations using which primary organizational framework?",
    options: [
      "A) Holland's six types (RIASEC)",
      "B) Occupational Information System (OIS) codes",
      "C) Standard Occupational Classification (SOC) codes",
      "D) Dictionary of Occupational Titles (DOT) classification"
    ],
    correct: 2,
    explanation: "O*NET uses SOC codes to organize occupational information but also incorporates Holland codes and other descriptors. The SOC system is the U.S. government's primary occupational classification system used by the Bureau of Labor Statistics."
  },
  {
    domain: "Career Development",
    question: "Career development across the lifespan involves multiple mini-cycles of exploration and establishment. Which theorist is MOST associated with this cyclical view of career development?",
    options: [
      "A) Frank Parsons",
      "B) Donald Super",
      "C) John Holland",
      "D) Gottfredson"
    ],
    correct: 1,
    explanation: "Super's concept of mini-cycles suggests that individuals revisit exploration and establishment at different life and career transitions, not just once. This allows for career changes and adaptations throughout the lifespan rather than viewing career development as a single linear process."
  },
  {
    domain: "Career Development",
    question: "When counseling an individual experiencing job loss, which career counseling approach would BEST address both the emotional and practical dimensions of this transition?",
    options: [
      "A) Only focusing on job search skills and resume development",
      "B) Integrating emotional processing with assessment, exploration, and skill-building",
      "C) Recommending immediate acceptance of any available position",
      "D) Delaying career counseling until emotional distress has resolved"
    ],
    correct: 1,
    explanation: "Job loss is both a practical and emotional crisis. Effective career counseling must simultaneously address grief/identity loss while providing practical support for assessment, exploration, and reemployment strategies. This integrated approach honors both the psychological and vocational dimensions."
  },
  {
    domain: "Career Development",
    question: "In dual-career or dual-earner families, career counselors should be aware of which consideration that is often underrepresented in traditional career theory?",
    options: [
      "A) The individual's work values and interests",
      "B) The interdependence of partners' career decisions and family logistics",
      "C) The importance of job security and benefits",
      "D) The role of intelligence in career success"
    ],
    correct: 1,
    explanation: "Traditional career theories often centered on individual career development in isolation. Dual-career/dual-earner family systems require counselors to address interdependent decision-making, geographic constraints, childcare coordination, and how one partner's career move affects the other."
  },
  {
    domain: "Career Development",
    question: "Which career development concern is MOST salient for individuals from underrepresented racial or ethnic groups, according to research?",
    options: [
      "A) Lack of interest in career planning",
      "B) Limited access to role models, networks, and occupational information",
      "C) Lower cognitive ability for career decision-making",
      "D) Preference for self-employment over traditional employment"
    ],
    correct: 1,
    explanation: "Research identifies systemic barriers including limited access to career mentors, professional networks, occupational role models, and quality career information as significant challenges for people from underrepresented backgrounds. These structural factors affect opportunity and information access rather than individual capacity."
  },
  {
    domain: "Career Development",
    question: "When providing career counseling to individuals with disabilities, what is a critical reframing that counselors should address?",
    options: [
      "A) The disability determines occupational options completely",
      "B) Career counseling should focus primarily on limitations rather than strengths",
      "C) The disability is one variable among many in career decision-making",
      "D) Career exploration should be delayed until the disability is fully managed"
    ],
    correct: 2,
    explanation: "Counselors should help individuals with disabilities view their condition as one contextual factor while maintaining an asset-based focus on strengths, abilities, interests, and values. This avoids the limiting assumption that disability alone determines career possibilities."
  },
  {
    domain: "Career Development",
    question: "Which factor has been identified as particularly influential in career development for women, beyond what Holland or trait-factor theories traditionally emphasized?",
    options: [
      "A) Genetic predisposition to certain career fields",
      "B) Gender socialization, role expectations, and structural barriers to advancement",
      "C) Women's inherent lack of interest in technical fields",
      "D) The necessity of choosing between family and career"
    ],
    correct: 1,
    explanation: "Contemporary career development research highlights how gender socialization shapes aspirations and opportunities, and how structural barriers (wage gaps, glass ceiling, caregiving expectations) influence women's career trajectories. These contextual factors go beyond individual interest matching."
  },
  {
    domain: "Career Development",
    question: "The concept of 'career adaptability' has become increasingly important in modern career counseling. What does career adaptability primarily refer to?",
    options: [
      "A) The ability to change careers frequently without consequence",
      "B) The capacity to adjust to changing work conditions and manage career transitions",
      "C) The willingness to accept any job offered",
      "D) The skill to negotiate higher salaries"
    ],
    correct: 1,
    explanation: "Career adaptability, developed by Savickas and others, refers to psychological resources for managing career changes and transitions. In an era of non-linear careers and frequent changes, adaptability (resilience, planning, confidence, concern) is more critical than finding a single perfect fit."
  },
  {
    domain: "Career Development",
    question: "Which career counseling intervention is MOST grounded in social cognitive career theory?",
    options: [
      "A) Presenting Holland codes and suggesting matching occupations",
      "B) Building self-efficacy through successful task accomplishment and modeling",
      "C) Assessing work values and needs",
      "D) Exploring family history of occupations"
    ],
    correct: 1,
    explanation: "SCCT emphasizes that career counseling should focus on building self-efficacy beliefs through mastery experiences, vicarious learning (modeling), and encouragement. This contrasts with purely trait-matching approaches that assess existing characteristics."
  },
  {
    domain: "Career Development",
    question: "In Krumboltz's social learning theory, what is the role of 'chance' or unplanned events in career development?",
    options: [
      "A) Chance events are insignificant compared to planned decision-making",
      "B) Planned learning experiences should prevent any chance influence",
      "C) Unplanned events are a primary source of career learning and opportunity",
      "D) Counselors should help clients ignore chance opportunities"
    ],
    correct: 2,
    explanation: "Krumboltz's later work on Planned Happenstance recognizes that unplanned events, serendipitous encounters, and chance occurrences are normal and valuable sources of career learning. Rather than viewing these as deviations, counselors help clients develop skills to recognize and leverage unexpected opportunities."
  },
  {
    domain: "Career Development",
    question: "Career counselors using a strengths-based approach are most aligned with which career development perspective?",
    options: [
      "A) Focusing on remedying deficits and limitations in work skills",
      "B) Identifying assets, talents, and capabilities as the foundation for career planning",
      "C) Emphasizing what clients cannot do in order to guide realistic choices",
      "D) Prioritizing external job market demands over individual characteristics"
    ],
    correct: 1,
    explanation: "Strengths-based career counseling, aligned with positive psychology and SCCT, builds from the client's existing capabilities, interests, and assets rather than starting from deficits. This approach enhances self-efficacy and engagement while creating more sustainable career goals."
  },
  {
    domain: "Career Development",
    question: "When a client expresses indecision about career direction, which assessment tool would BEST help clarify their core values to guide exploration?",
    options: [
      "A) Work Values Inventory or similar values assessment",
      "B) General IQ or aptitude test",
      "C) Personality disorder screening inventory",
      "D) Academic achievement test"
    ],
    correct: 0,
    explanation: "Work values inventories directly assess what clients find meaningful and motivating (e.g., autonomy, helping others, financial security) and serve as anchors for career exploration. Understanding values creates a framework for evaluating options beyond just interests or abilities."
  },
  {
    domain: "Career Development",
    question: "Which of the following BEST describes career counseling with LGBTQ+ individuals?",
    options: [
      "A) Sexual orientation and gender identity have no relevance to career planning",
      "B) LGBTQ+ clients should be advised to hide their identity in the workplace",
      "C) Career counselors should understand workplace discrimination, visibility concerns, and create affirming environments",
      "D) Career counseling for LGBTQ+ clients should focus only on survival and basic employment"
    ],
    correct: 2,
    explanation: "Effective career counseling with LGBTQ+ clients acknowledges workplace discrimination and heteronormativity while helping clients make informed decisions about visibility, organizational fit, and inclusive workplaces. An affirming, informed approach honors the full identity while planning career paths."
  },
  {
    domain: "Career Development",
    question: "The 'glass ceiling' and 'sticky floor' are terms that refer to which career development phenomenon?",
    options: [
      "A) The normal progression through career stages",
      "B) Structural barriers preventing advancement for women and minorities, especially at different points",
      "C) Individual failure to pursue career opportunities",
      "D) The natural consequence of career choices"
    ],
    correct: 1,
    explanation: "The glass ceiling refers to invisible barriers preventing women and minorities from reaching upper leadership positions; the sticky floor describes barriers to entering and advancing from entry-level positions. Both represent systemic rather than individual limitations on career advancement."
  },
  {
    domain: "Career Development",
    question: "Which career counseling consideration is MOST important when working with first-generation college students or those entering new career fields?",
    options: [
      "A) Assuming they have sufficient family and community knowledge of careers",
      "B) Providing explicit career information, role models, and cultural navigation guidance",
      "C) Recommending they follow their parents' occupational paths",
      "D) Minimizing discussion of potential barriers"
    ],
    correct: 1,
    explanation: "First-generation students often lack family career knowledge, professional networks, and cultural capital regarding career navigation. Counselors should proactively provide occupational information, identify role models, and help develop professional networks and cultural competence."
  },
  {
    domain: "Career Development",
    question: "In career counseling with older workers or those nearing retirement, which developmental task is PRIMARY?",
    options: [
      "A) Exploring initial career options as if beginning anew",
      "B) Building self-efficacy for new learning and skill development",
      "C) Reflecting on career meaning, legacy, and transition to retirement or encore careers",
      "D) Accepting decline and preparing for complete work exit"
    ],
    correct: 2,
    explanation: "Super's later work and contemporary gerontological research emphasize that older workers face developmental tasks of meaning-making, legacy, generativity, and planning transitions. This may include encore careers, consulting, volunteering, or phased retirement rather than abrupt exit."
  },
  {
    domain: "Career Development",
    question: "Which of the following best represents an ecological or systems perspective on career development?",
    options: [
      "A) Career is solely determined by individual traits and interests",
      "B) Career development occurs within context of family, community, institutions, and broader structures",
      "C) Environmental factors are secondary to personal motivation",
      "D) Counselors should focus only on individual cognitive factors"
    ],
    correct: 1,
    explanation: "An ecological perspective recognizes that career development is embedded in nested systems including family, community, educational institutions, labor market structures, and societal policies. Counselors using this view address both individual and contextual factors affecting opportunities and choices."
  },
  {
    domain: "Career Development",
    question: "The concept of 'calling' or vocation in career development refers to which primary meaning?",
    options: [
      "A) Only relevant to religious or helping professions",
      "B) A sense of purpose, meaning, and fit between personal values and work contribution",
      "C) A requirement to achieve specific financial outcomes",
      "D) An unrealistic expectation that most workers should abandon"
    ],
    correct: 1,
    explanation: "While rooted historically in religious contexts, the modern concept of calling encompasses a sense of purpose and meaningful alignment between one's values and work impact. Research suggests career calling predicts well-being and engagement across diverse fields and can be cultivated through counseling."
  },
  {
    domain: "Career Development",
    question: "Which career assessment approach would BEST complement trait-factor counseling to address the client's broader life context?",
    options: [
      "A) A second trait-factor assessment to improve accuracy",
      "B) Career narratives, life story exploration, or genogram to understand context",
      "C) Intelligence testing to establish baseline ability",
      "D) Medical evaluation to rule out disabilities"
    ],
    correct: 1,
    explanation: "Life story and narrative approaches illuminate how family history, cultural background, past experiences, and contextual factors shape career development. Integrating narrative assessment with trait-factor tools provides a more holistic understanding of the client within their life context."
  },
  {
    domain: "Career Development",
    question: "Career information systems and labor market data (like O*NET or Bureau of Labor Statistics projections) serve which primary purpose in career counseling?",
    options: [
      "A) To make the client's decision for them based on job availability",
      "B) To provide accurate, current information for realistic exploration and decision-making",
      "C) To discourage clients from pursuing less common occupations",
      "D) To replace the need for personal career assessment"
    ],
    correct: 1,
    explanation: "Current occupational information helps clients make informed decisions about realistic opportunities, earning potential, required education, and job outlook. This data supports exploration and planning while helping clients balance interests/values with practical considerations."
  },
  {
    domain: "Career Development",
    question: "Which factor is MOST predictive of career satisfaction according to research evidence, across diverse populations?",
    options: [
      "A) The prestige or status of the occupation",
      "B) The salary level achieved",
      "C) Person-environment fit (alignment of characteristics with job demands/reinforcers)",
      "D) The number of career changes completed"
    ],
    correct: 2,
    explanation: "Decades of research (work adjustment theory, SCCT, organizational psychology) demonstrates that fit between individual characteristics and job environment predicts satisfaction and retention better than external markers like prestige or income. This validates trait-matching and person-environment approaches."
  },
  {
    domain: "Career Development",
    question: "In Super's concept of life roles, what is the relationship between various roles (worker, parent, student, citizen, leisure) and career development?",
    options: [
      "A) Career role supersedes and takes priority over all other roles",
      "B) Roles are entirely separate with no relationship to career development",
      "C) Career role is one among several interconnected roles that create life meaning",
      "D) Career development should eliminate competing family and leisure roles"
    ],
    correct: 2,
    explanation: "Super's life-space concept proposes that individuals simultaneously occupy multiple roles, and career is one among several life domains. Integration and balance of these roles across the lifespan contribute to overall life satisfaction and well-being, not just career success."
  },
  {
    domain: "Career Development",
    question: "Which career counseling technique is MOST aligned with Krumboltz's approach to helping clients with career indecision?",
    options: [
      "A) Administering the Strong Interest Inventory and matching codes to occupations",
      "B) Exploring past positive learning experiences and generating future learning opportunities",
      "C) Having the client identify their fixed personality type",
      "D) Recommending a specific career path based on assessment scores"
    ],
    correct: 1,
    explanation: "Krumboltz's learning approach focuses on building learning skills and generating diverse positive experiences rather than assessing stable traits. He encourages counselors to help clients become 'generators of alternatives' by identifying what conditions create positive learning and career possibilities."
  },
  {
    domain: "Career Development",
    question: "The 'prototype' or 'ideal worker' concept in organizational psychology has which implication for career counseling with marginalized groups?",
    options: [
      "A) It validates using narrow standards to assess career potential",
      "B) It explains how organizational norms may advantage some groups while creating barriers for others",
      "C) It supports the idea that career success requires conformity to a single model",
      "D) It is irrelevant to individual career planning"
    ],
    correct: 1,
    explanation: "Research reveals that 'ideal worker' prototypes (often based on privileged demographics: male, full-time, uninterrupted tenure) create invisible expectations that disadvantage women, people of color, and those with caregiving responsibilities. Counselors should help clients understand these systemic biases rather than internalize failure for not fitting the prototype."
  },
  {
    domain: "Career Development",
    question: "Which intervention would be MOST culturally responsive when counseling career development with recent immigrants?",
    options: [
      "A) Recommending they pursue only occupations available in their country of origin",
      "B) Assessing work values, skills, credentials while understanding immigration barriers and credential recognition issues",
      "C) Assuming their educational background will not transfer",
      "D) Encouraging rapid entry to any available employment without exploration"
    ],
    correct: 1,
    explanation: "Culturally responsive career counseling with immigrants acknowledges that credentials may not transfer, language proficiency affects opportunities, and values around work may differ from mainstream assumptions. Counselors should help clients understand both their assets and systemic barriers while building realistic pathways."
  },
  {
    domain: "Career Development",
    question: "The concept of 'career plateau' typically occurs when:",
    options: [
      "A) An employee reaches their maximum possible income",
      "B) An individual recognizes limited opportunity for advancement despite competence",
      "C) A person stops enjoying their work entirely",
      "D) Someone reaches the age of 50 in their career"
    ],
    correct: 1,
    explanation: "Career plateau refers to a period when an individual sees limited prospects for hierarchical advancement within their organization or field, regardless of their performance. This can trigger reassessment and may lead to lateral moves, skill development, or career redirection rather than disengagement."
  },
  {
    domain: "Career Development",
    question: "How does Holland's theory address the concept of career change or transitions throughout the lifespan?",
    options: [
      "A) Holland's theory does not account for career changes",
      "B) It assumes career type is fixed and unchanging",
      "C) Career changes occur when self-concept or environment shifts, requiring reassessment of fit",
      "D) It recommends remaining in the same career regardless of satisfaction"
    ],
    correct: 2,
    explanation: "While Holland's theory identifies stable types, changes in self-concept, life circumstances, or work environments can shift the optimal fit. Counselors can use Holland codes at multiple points across the lifespan to identify whether a career transition or new exploration is warranted."
  },
  {
    domain: "Career Development",
    question: "Which measurement approach is used by the Self-Directed Search (SDS) to help clients discover occupational matches?",
    options: [
      "A) Three-letter Holland code matched to occupational database",
      "B) Percentile scores compared to national norms",
      "C) Trait factor matching based on aptitude tests",
      "D) Myers-Briggs personality type indication"
    ],
    correct: 0,
    explanation: "The SDS generates a three-letter Holland code (e.g., RIS, AES) summarizing the client's interest profile, then matches this code to occupations where satisfied workers have similar code profiles. This code-matching system makes the SDS accessible and practical for self-guided exploration."
  },
  {
    domain: "Career Development",
    question: "In career counseling, what is the significance of exploring 'work values' beyond just 'interests'?",
    options: [
      "A) Values and interests are identical concepts",
      "B) Values represent what is meaningful and motivating; interests are preferences for activities",
      "C) Work values are less important than interests in career planning",
      "D) Exploring values may interfere with objective decision-making"
    ],
    correct: 1,
    explanation: "A client may have interest in an activity but if it doesn't align with core values (autonomy, service, creativity), satisfaction suffers. Values (what matters most) provide the foundation for sustainable career choices, while interests (what we enjoy doing) are one input into the decision."
  },
  {
    domain: "Career Development",
    question: "Which career development theorist specifically emphasized the importance of an individual's locus of control in career decision-making?",
    options: [
      "A) Holland",
      "B) Super",
      "C) Krumboltz",
      "D) Rotter and subsequent researchers in career literature"
    ],
    correct: 3,
    explanation: "Locus of control (internal vs. external orientation toward causation) has been extensively studied in career development research. Individuals with internal locus of control tend to engage more actively in career planning and exploration, while external locus can relate to passivity in decision-making."
  },
  {
    domain: "Career Development",
    question: "When a client says, 'I'm too old to change careers,' which career counseling response would BEST challenge this belief?",
    options: [
      "A) Agree and encourage acceptance of current situation",
      "B) Ignore the statement and proceed with assessment",
      "C) Explore the evidence for this belief, share research on successful career transitions, and assess transferable skills",
      "D) Recommend immediate retirement planning instead of career counseling"
    ],
    correct: 2,
    explanation: "This is a limiting belief often driven by internalized ageism. Research demonstrates that people successfully transition careers across the lifespan; counselors should gently challenge this belief while helping the client identify transferable skills and realistic pathways for change if desired."
  },
  {
    domain: "Career Development",
    question: "The Dictionary of Occupational Titles (DOT) and Occupational Information Network (O*NET) differ in which important way?",
    options: [
      "A) DOT is more current and comprehensive than O*NET",
      "B) O*NET provides more detailed job analysis and is regularly updated; DOT was its predecessor",
      "C) They cover entirely different sets of occupations",
      "D) O*NET is used only for research, not for counseling"
    ],
    correct: 1,
    explanation: "The DOT, published until 1991, organized occupations primarily by worker functions. O*NET replaced it with a more comprehensive system including worker characteristics, job tasks, work context, and is maintained with current data. Career counselors should use O*NET as the primary occupational information source."
  },
  {
    domain: "Career Development",
    question: "Which of the following is a key principle of feminist career counseling theory?",
    options: [
      "A) Women should aspire to traditionally male-dominated fields exclusively",
      "B) Gender socialization and structural barriers significantly shape career options and outcomes",
      "C) Personal responsibility alone determines career success regardless of external barriers",
      "D) Career counseling should ignore gender entirely as a relevant variable"
    ],
    correct: 1,
    explanation: "Feminist approaches recognize that socialization, structural inequities, and systemic barriers (not individual deficits) shape women's career trajectories. This perspective integrates social analysis while maintaining individual agency and advocacy for equitable opportunities."
  },
  {
    domain: "Career Development",
    question: "The concept of 'protean careers' describes which contemporary career pattern?",
    options: [
      "A) Careers that follow a single linear progression upward",
      "B) Self-directed careers driven by personal values and learning goals rather than organizational hierarchy",
      "C) Careers marked by frequent job loss and unemployment",
      "D) Careers limited to traditional full-time employment"
    ],
    correct: 1,
    explanation: "Hall's concept of protean careers describes individuals who prioritize personal growth and values alignment over hierarchical advancement and organizational rewards. This pattern is increasingly common in modern work and requires different counseling approaches focused on adaptability and self-direction."
  },
  {
    domain: "Career Development",
    question: "Career counselors working with individuals in career transition should address which psychological dimension alongside practical job search skills?",
    options: [
      "A) Only occupational information",
      "B) Identity loss, grief, and self-efficacy rebuilding",
      "C) Minimizing discussion of feelings to stay focused on logistics",
      "D) Directing the client to therapy rather than addressing this in career counseling"
    ],
    correct: 1,
    explanation: "Career transitions involve identity disruption and psychological distress alongside practical challenges. Effective career counseling simultaneously addresses the emotional processing of identity shift and the practical work of skill assessment and job search, recognizing these as interconnected."
  },
  {
    domain: "Career Development",
    question: "What does the 'glass escalator' refer to in career development literature?",
    options: [
      "A) The barriers women face in advancing in male-dominated fields",
      "B) The hidden advantages and faster advancement some groups experience in female-dominated fields",
      "C) The slow pace of organizational change",
      "D) A metaphor for unrealistic career expectations"
    ],
    correct: 1,
    explanation: "The glass escalator describes how men in female-dominated fields (nursing, elementary education, social work) often experience preferential treatment, faster advancement, and higher compensation compared to women in the same fields. This demonstrates gendered advantage even in female-dominated work."
  },
  {
    domain: "Career Development",
    question: "In career counseling with rural or underserved populations, which barrier is MOST commonly encountered?",
    options: [
      "A) Lack of career ambition",
      "B) Limited access to career information, role models, and occupational opportunities",
      "C) Preference to remain unemployed",
      "D) Inability to understand career concepts"
    ],
    correct: 1,
    explanation: "Rural and underserved populations face structural barriers including limited local job opportunities, geographic isolation from professional networks, and reduced access to career counseling and occupational information. These systemic barriers differ from individual readiness or capacity."
  },
  {
    domain: "Career Development",
    question: "Which career assessment is MOST appropriate for a client experiencing significant anxiety or depression that may be affecting career clarity?",
    options: [
      "A) Proceeding immediately with intensive interest and values assessments",
      "B) Deferring career assessments until mental health symptoms are more stabilized",
      "C) Integrating mental health screening and counseling with gentler career exploration",
      "D) Advising the client that career counseling cannot proceed alongside mental health treatment"
    ],
    correct: 2,
    explanation: "Career counseling can proceed while addressing mental health concerns; in fact, meaningful work often supports recovery. Counselors should slow the pace, use less intensive assessments initially, and integrate career exploration with mental health support rather than treating them as entirely separate."
  },
  {
    domain: "Career Development",
    question: "The concept of 'boundaryless careers' refers to which modern employment pattern?",
    options: [
      "A) Careers with no ethical boundaries or professional standards",
      "B) Work that crosses organizational and occupational boundaries through gig work, freelancing, or frequent role transitions",
      "C) Employment with no geographic location specified",
      "D) Careers that have eliminated all job security"
    ],
    correct: 1,
    explanation: "Boundaryless careers describe work patterns that move across organizational, occupational, and geographic boundaries, often enabled by technology and gig economy platforms. This contrasts with the traditional model of single-organization or single-occupation careers and requires different career planning approaches."
  },
  {
    domain: "Career Development",
    question: "Which is a primary limitation of using personality type (MBTI) as a standalone career planning tool?",
    options: [
      "A) It provides excessive occupational specificity",
      "B) It lacks empirical validation",
      "C) It measures personality preferences, not vocational interests or abilities",
      "D) It cannot be used with diverse populations"
    ],
    correct: 2,
    explanation: "MBTI assesses how individuals prefer to process information and interact with the world, but doesn't directly measure vocational interests, work values, or occupational fit. Career counselors should supplement MBTI (if used) with interest inventories that directly assess vocational domains."
  },
  {
    domain: "Career Development",
    question: "How do contextual influences (family, socioeconomic status, race, gender) relate to career development according to contemporary theories?",
    options: [
      "A) Context is irrelevant; career development is purely individual",
      "B) Context determines career outcomes entirely; individual choice is minimal",
      "C) Context shapes opportunity structures, socialization, and access while individuals exercise agency within these constraints",
      "D) Only lower socioeconomic status individuals are affected by context"
    ],
    correct: 2,
    explanation: "Modern theories (SCCT, ecological models, feminist approaches) recognize that context powerfully shapes career development through access to information, role models, opportunity, discrimination, and socialization. However, individuals are not passive; they make choices within these contextual conditions."
  },
  {
    domain: "Career Development",
    question: "Which career counseling approach would BEST support the development of career adaptability in a rapidly changing job market?",
    options: [
      "A) Focusing exclusively on achieving a stable, permanent career match",
      "B) Building skills for ongoing learning, exploration, resilience, and confidence in managing unpredictability",
      "C) Advising clients to avoid risk and changes",
      "D) Accepting that career planning is futile in uncertain conditions"
    ],
    correct: 1,
    explanation: "Career adaptability resources (concern, control, confidence, curiosity) enable individuals to thrive amid change. Counselors should shift from outcome focus (finding the perfect job) to process focus (building flexibility, learning agility, and resilience) that prepares clients for inevitable career transitions."
  },
  {
    domain: "Career Development",
    question: "In the trait-factor approach to career counseling, what is the primary assumption about the match between person and job?",
    options: [
      "A) Perfect matches are possible and should be pursued",
      "B) Matches are temporary and constantly shifting",
      "C) Logical matching of measurable traits to job requirements predicts satisfaction and success",
      "D) Matches are determined primarily by luck or chance"
    ],
    correct: 2,
    explanation: "Trait-factor theory (Parsons) assumes that career satisfaction and performance result from systematic matching of measurable individual characteristics (abilities, interests, values) to job demands and environments. While this remains valuable, modern theory recognizes that matches are dynamic and influenced by contextual factors."
  },
  {
    domain: "Career Development",
    question: "Which statement BEST describes the relationship between career development counseling and mental health counseling?",
    options: [
      "A) They are entirely separate domains with no overlap",
      "B) Career issues are primarily mental health problems requiring therapy",
      "C) They are distinct but can intersect; career distress may trigger or reflect broader mental health concerns",
      "D) Mental health treatment must precede all career counseling"
    ],
    correct: 2,
    explanation: "Career and mental health counseling address different domains but intersect significantly. Career transitions trigger identity shifts and stress; conversely, depression or anxiety can affect career clarity and functioning. Competent counselors recognize these connections and integrate approaches as needed."
  },
  {
    domain: "Career Development",
    question: "What is the primary purpose of a career portfolio or electronic portfolio in career counseling?",
    options: [
      "A) To replace interviews and resumes",
      "B) To document skills, accomplishments, and evidence of learning for career exploration and job search",
      "C) To diagnose career problems",
      "D) To eliminate the need for formal assessments"
    ],
    correct: 1,
    explanation: "Career portfolios provide tangible, visual documentation of skills and accomplishments that can clarify capabilities during counseling and enhance job search effectiveness. They are especially useful for clients struggling to articulate their strengths or those with non-linear work histories."
  },
  {
    domain: "Career Development",
    question: "Which factor is MOST important to address when counseling individuals interested in entrepreneurship or self-employment?",
    options: [
      "A) Only the technical skills required for the specific business",
      "B) Business planning skills, financial management, risk tolerance, self-efficacy, and support systems",
      "C) Assuming entrepreneurship is inherently risky and advising against it",
      "D) The personality type of the potential entrepreneur"
    ],
    correct: 1,
    explanation: "Successful entrepreneurship requires business acumen, financial literacy, and realistic self-assessment of risk tolerance alongside technical skills. Counselors should help clients assess whether they have the capacity, support systems, and psychological flexibility for self-employment."
  },
  {
    domain: "Career Development",
    question: "The concept of 'spiritual calling' or intrinsic motivation in career development is MOST aligned with which theoretical framework?",
    options: [
      "A) Trait-factor theory exclusively",
      "B) Self-determination theory and meaning-based approaches emphasizing autonomy, purpose, and contribution",
      "C) Only relevant for clergy and religious professionals",
      "D) Incompatible with secular career counseling"
    ],
    correct: 1,
    explanation: "Self-determination theory and meaning-centered approaches recognize that intrinsic motivation and sense of purpose powerfully drive career satisfaction and engagement. Many clients, across all fields and backgrounds, seek work that aligns with deeper values and contributes meaning to life."
  },
  {
    domain: "Career Development",
    question: "When counseling career decisions for individuals with multiple marginalized identities, what is a critical consideration?",
    options: [
      "A) Treat multiple identities as separate issues to address sequentially",
      "B) Understand intersectionality: how multiple identities interact to create unique barriers and assets",
      "C) Focus only on the most prominent identity",
      "D) Assume that marginalization applies equally across all contexts"
    ],
    correct: 1,
    explanation: "Intersectionality recognizes that the interaction of multiple identities (race, gender, sexuality, disability, class) creates unique experiences that cannot be understood by examining identities separately. Career counselors must develop intersectional awareness to effectively support clients with layered identities."
  },
  {
    domain: "Career Development",
    question: "Which career development outcome is MOST consistently predicted by the person-environment fit models?",
    options: [
      "A) High income and prestige",
      "B) Rapid advancement through the organizational hierarchy",
      "C) Job satisfaction, tenure, and psychological well-being",
      "D) The number of career changes an individual makes"
    ],
    correct: 2,
    explanation: "Work adjustment theory and P-E fit research consistently demonstrate that alignment between individual needs/abilities and job environment/reinforcers predicts satisfaction and job stability better than external markers like pay or status. This validates the fundamental logic of career counseling."
  },
  {
    domain: "Career Development",
    question: "In career counseling with clients experiencing burnout or job stress, which intervention addresses the root issue?",
    options: [
      "A) Recommending stress management techniques only",
      "B) Exploring fit between person and environment, workload, values alignment, and potential career changes",
      "C) Suggesting brief vacation before returning to the same situation",
      "D) Normalizing burnout as inevitable in all careers"
    ],
    correct: 1,
    explanation: "While stress management has value, addressing burnout requires examining person-environment fit. Burnout often signals misalignment between values and work demands, unrealistic expectations, or organizational culture mismatch. Career counseling helps clients assess whether adaptation or transition is needed."
  },
  {
    domain: "Career Development",
    question: "Which assessment would be MOST appropriate for identifying potential occupational options for a client who is undecided and has limited self-knowledge?",
    options: [
      "A) Advanced personality typing assessment exclusively",
      "B) Interest inventory (like SII or SDS) combined with values exploration",
      "C) Intelligence or aptitude test alone",
      "D) Occupational preference ranking without assessment"
    ],
    correct: 1,
    explanation: "For undecided clients, interest and values assessments provide entry points into exploration by revealing patterns that may not be immediately obvious to the client. These assessments help narrow the vast occupational landscape into manageable options for further exploration."
  },
  {
    domain: "Career Development",
    question: "How does Gottfredson's theory improve upon earlier trait-factor approaches in explaining career development?",
    options: [
      "A) It eliminates the need to consider individual traits",
      "B) It incorporates developmental stages, gender socialization, and the process of narrowing options over time",
      "C) It proves that environmental factors are irrelevant",
      "D) It suggests that all career choices are equally possible at any age"
    ],
    correct: 1,
    explanation: "Gottfredson added developmental sophistication to trait-factor thinking by showing how self-concept, gender awareness, and social expectations progressively limit options (circumscription). She also illuminated how individuals compromise their ideals due to practical constraints, providing a more nuanced view of career decision-making."
  },
  {
    domain: "Career Development",
    question: "Which career counseling technique is MOST effective for addressing learned helplessness or career hopelessness?",
    options: [
      "A) Accepting the client's pessimistic view as realistic",
      "B) Building self-efficacy through small successes, identifying existing competencies, and problem-solving concrete barriers",
      "C) Providing motivational lectures about career possibilities",
      "D) Recommending they accept whatever job is available"
    ],
    correct: 1,
    explanation: "Learned helplessness requires evidence-based intervention focused on rebuilding agency. Counselors help clients identify past successes, break career goals into achievable steps, address concrete barriers, and build evidence of capability through mastery experiences, aligning with SCCT principles."
  },
  {
    domain: "Career Development",
    question: "The 'saturated worker' role in contemporary society relates to which career development concern?",
    options: [
      "A) Workers who are fully competent and need no development",
      "B) Individuals expected to manage multiple simultaneous work roles (primary job, side gigs, domestic labor, caregiving)",
      "C) Workers who are overworked and need vacation",
      "D) A meaningless term with no relevance to career counseling"
    ],
    correct: 1,
    explanation: "The saturated worker concept describes how modern work extends beyond a single job into gig work, side hustles, household management, and caregiving simultaneously. Career counselors must address work-life integration and realistic expectations for managing multiple roles without exploitation."
  },
  {
    domain: "Career Development",
    question: "Which of the following represents a strength-based reframe for a client who perceives their career history as fragmented or unstable?",
    options: [
      "A) Confirming that instability indicates poor career planning ability",
      "B) Identifying transferable skills, adaptability, and diverse learning from various roles",
      "C) Recommending they hide this history from employers",
      "D) Suggesting the history reveals character flaws"
    ],
    correct: 1,
    explanation: "A non-linear career path, from a strength-based perspective, may reflect adaptability, diverse skill development, responsiveness to life circumstances, or intentional exploration. Counselors help clients reframe their narrative from deficit (failure to commit) to asset (resilience, cross-training, self-direction)."
  },
  {
    domain: "Career Development",
    question: "In Super's theory, the concept of 'career maturity' refers to which developmental achievement?",
    options: [
      "A) Reaching a certain age milestone",
      "B) Having made a final, unchangeable career choice",
      "C) Possessing realistic self-knowledge, occupational knowledge, and decision-making readiness",
      "D) Achieving the highest possible income"
    ],
    correct: 2,
    explanation: "Career maturity (or career readiness) is not age-based but reflects competencies: understanding oneself, knowing about occupations, and having skills to make sound decisions. This readiness continues developing across the lifespan and can be fostered through counseling."
  },
  {
    domain: "Career Development",
    question: "Which career counseling consideration is MOST important when working with individuals from collectivist cultures?",
    options: [
      "A) Assuming individual autonomy is the only valid value",
      "B) Understanding that family input, interdependence, and cultural values may appropriately influence decisions",
      "C) Ignoring family relationships in career planning",
      "D) Recommending they assimilate to individualistic career norms"
    ],
    correct: 1,
    explanation: "Counselors must respect cultural differences in decision-making and values. In collectivist cultures, family consultation, interdependence, and cultural values may appropriately guide career choices. Imposing Western individualism undermines cultural integrity and effective counseling."
  },
  {
    domain: "Career Development",
    question: "The 'hidden curriculum' in educational and career settings refers to which phenomenon?",
    options: [
      "A) Subjects not officially taught in schools",
      "B) Socialization into unstated norms, values, and expectations that advantage some students and disadvantage others",
      "C) A deliberate plan to exclude certain students from career preparation",
      "D) An advanced curriculum for gifted students only"
    ],
    correct: 1,
    explanation: "The hidden curriculum encompasses unstated lessons in school and work (norms, values, expectations) that are internalized differently depending on students' background. For example, some students learn they belong in leadership; others learn they should defer. Career counselors help clients identify and resist limiting hidden messages."
  },
  {
    domain: "Career Development",
    question: "Which career development assessment approach would BEST identify barriers and strengths within a client's ecological context?",
    options: [
      "A) Trait-factor assessment alone",
      "B) Ecomap or genogram paired with interest/values assessment",
      "C) Cognitive ability testing",
      "D) Personality disorder screening"
    ],
    correct: 1,
    explanation: "Ecomaps and genograms visually represent family relationships, community connections, and resources/barriers in a client's life system. Combined with career interest and values assessment, these tools reveal how context supports or constrains career possibilities and identify available or needed supports."
  },
  {
    domain: "Career Development",
    question: "What is the primary goal of career counseling for individuals with serious and persistent mental illness?",
    options: [
      "A) Pushing them toward competitive employment regardless of readiness",
      "B) Assuming they cannot work and should focus on disability benefits",
      "C) Supporting employment that is meaningful and sustainable alongside mental health management",
      "D) Recommending volunteer work exclusively"
    ],
    correct: 2,
    explanation: "Supported employment and recovery-oriented models recognize that work can be therapeutic and identity-affirming for people with mental illness. Career counselors should support meaningful employment at the client's readiness level, with coordination of mental health and vocational supports."
  },
  {
    domain: "Career Development",
    question: "Which statement BEST reflects contemporary understanding of career paths in the 21st century?",
    options: [
      "A) Most people follow a single linear career with one organization",
      "B) Careers are characterized by increasing non-linearity, frequent transitions, and multiple concurrent roles",
      "C) Career planning is no longer necessary in a rapidly changing economy",
      "D) Everyone should pursue self-employment to avoid instability"
    ],
    correct: 1,
    explanation: "Modern careers are increasingly non-linear with job transitions, role changes, freelancing, and concurrent positions throughout the lifespan. This shift requires counselors to help clients develop adaptability, continuous learning, and self-direction rather than pursuing a single stable match."
  },
  {
    domain: "Career Development",
    question: "In counseling individuals facing technological displacement or occupational obsolescence, which counseling focus is MOST essential?",
    options: [
      "A) Accepting that the occupation is gone permanently",
      "B) Identifying transferable skills, facilitating retraining, and supporting adaptation to labor market shifts",
      "C) Recommending early retirement regardless of financial readiness",
      "D) Focusing exclusively on emotional processing without practical planning"
    ],
    correct: 1,
    explanation: "While emotional processing is important, counseling should actively support skill translation, retraining opportunities, and identification of adjacent occupational fields. Helping clients recognize and market transferable skills creates bridges to new work rather than leaving them stuck in loss."
  },
  {
    domain: "Career Development",
    question: "Which career development outcome metric is MOST aligned with a holistic, well-being-centered approach rather than purely economic measures?",
    options: [
      "A) Highest income achieved",
      "B) Satisfaction, meaning, values alignment, and life balance alongside practical sustenance",
      "C) Speed of advancement through organizational hierarchy",
      "D) Perfect match to a pre-identified occupation"
    ],
    correct: 1,
    explanation: "Holistic career counseling measures success by subjective well-being, values alignment, meaning, and sustainable work-life integration rather than only external markers like income or titles. This reflects contemporary understanding that career development serves life satisfaction and development."
  },
  {
    domain: "Career Development",
    question: "Which ethical consideration is MOST important in career counseling with vulnerable populations (e.g., low-income, youth in foster care, incarcerated individuals)?",
    options: [
      "A) Assuming they cannot make good decisions and directing choices for them",
      "B) Respecting autonomy while actively addressing barriers and expanding opportunity awareness",
      "C) Providing only realistic (limiting) information about their prospects",
      "D) Avoiding career counseling until their circumstances improve"
    ],
    correct: 1,
    explanation: "Ethical practice with vulnerable populations balances respecting client autonomy with actively advocating for expanded opportunities and addressing systemic barriers. Counselors should avoid both paternalism (deciding for clients) and learned helplessness (reinforcing limitation) in their approach."
  },
  {
    domain: "Career Development",
    question: "How do parental expectations and family dynamics influence career development, according to research?",
    options: [
      "A) They have no significant impact on children's career choices",
      "B) They are the only factor determining career outcomes",
      "C) They shape aspirations, values, and opportunity awareness while individuals exercise agency within family context",
      "D) Career counseling should discourage family input entirely"
    ],
    correct: 2,
    explanation: "Family systems research reveals that parental expectations, family career narrative, opportunity exposure, and messaging about what is 'appropriate' significantly influence children's career development. Counselors should explore family influences while helping clients develop their own voice and choices."
  },
  {
    domain: "Career Development",
    question: "The concept of 'privilege' in career development refers to which advantage?",
    options: [
      "A) A form of employee benefit like vacation time",
      "B) Unearned systemic advantages in opportunity, information, and advancement based on group membership",
      "C) Excessive salary or status",
      "D) Reserved exclusively for executives"
    ],
    correct: 1,
    explanation: "Career privilege describes unearned advantages due to group membership (e.g., based on race, gender, class, ability status). Examples include greater access to networks, mentors, opportunity information, and freedom from discrimination. Counselors should help privileged clients recognize and use privilege responsibly."
  },
  {
    domain: "Career Development",
    question: "In Super's rainbow model of life roles, which life role is likely to become increasingly central in late adulthood according to his theory?",
    options: [
      "A) Work role continues to dominate",
      "B) Leisure and citizen roles expand while work role diminishes",
      "C) All roles immediately disappear upon retirement",
      "D) Family roles remain constant across all life stages"
    ],
    correct: 1,
    explanation: "Super's rainbow model shows how life roles (worker, parent, leisure participant, citizen) shift in centrality across stages. In later life stages, work typically becomes less central while leisure, citizen roles, and family connection may expand, creating opportunity for life redesign beyond career."
  },
  {
    domain: "Career Development",
    question: "Which career development theory BEST accounts for the significant role of luck, chance, or unplanned events?",
    options: [
      "A) Trait-factor theory",
      "B) Krumboltz's Planned Happenstance Theory",
      "C) Holland's RIASEC model",
      "D) Gottfredson's circumscription/compromise"
    ],
    correct: 1,
    explanation: "While most theories focus on planned exploration and decision-making, Krumboltz's Planned Happenstance Theory recognizes that chance events are normal and valuable in career development. Effective career planning includes developing the flexibility to recognize and pursue unexpected opportunities."
  },
  {
    domain: "Career Development",
    question: "What is the primary limitation of career assessments that focus exclusively on interests and abilities?",
    options: [
      "A) They are too comprehensive",
      "B) They neglect values, personality, contextual factors, and meaning-making in career choice",
      "C) They are inappropriate for school-based counseling",
      "D) They provide too much occupational specificity"
    ],
    correct: 1,
    explanation: "Interest/ability-focused assessments provide valuable data but miss crucial dimensions like values (what matters), personality fit, and meaning. Comprehensive career counseling integrates multiple assessment domains and explores contextual factors, not just matching abilities to job requirements."
  },
  {
    domain: "Career Development",
    question: "When a client expresses career aspirations that seem unrealistic given their abilities, what is the MOST ethical counseling response?",
    options: [
      "A) Quickly redirect them to 'realistic' options",
      "B) Explore the aspiration, assess abilities, discuss barriers and pathways, and support informed decision-making",
      "C) Assume their judgment is impaired",
      "D) Avoid discussing the discrepancy to protect their feelings"
    ],
    correct: 1,
    explanation: "Counselors should help clients distinguish between realistic goals and those requiring significant development. Open exploration of interests, realistic assessment of required training, and problem-solving specific barriers respects client autonomy while promoting informed decision-making. Some 'unrealistic' goals become achievable with effort."
  },
  {
    domain: "Career Development",
    question: "Which factor would MOST likely shift an individual toward exploring a new career path according to life-span developmental theory?",
    options: [
      "A) A single negative comment from a supervisor",
      "B) Developmental transitions (graduation, becoming a parent, health change) or significant life changes",
      "C) Reaching a certain age regardless of life circumstances",
      "D) Economic improvement"
    ],
    correct: 1,
    explanation: "Life transitions (developmental milestones and significant events) naturally prompt career reassessment. These teachable moments offer opportunities for counselors to help clients explore whether their current career alignment meets their evolving needs, values, and circumstances."
  },
  {
    domain: "Career Development",
    question: "How does work-life balance as a career development concern differ from previous generations?",
    options: [
      "A) It was equally important in earlier eras but less discussed",
      "B) Contemporary workers prioritize integration of multiple life roles; technology blurs work-life boundaries requiring new strategies",
      "C) Only women have ever been concerned with balance",
      "D) Work-life balance is less important to younger workers"
    ],
    correct: 1,
    explanation: "Contemporary work (always-on technology, gig economy, dual careers) creates different balance challenges than previous eras. Younger workers increasingly prioritize meaningful work and life integration. Career counselors must address sustainability and intentional role management throughout career planning."
  },
  {
    domain: "Career Development",
    question: "In career counseling, what does the principle of 'starting where the client is' mean?",
    options: [
      "A) Accepting the client's current situation as unchangeable",
      "B) Meeting clients at their current developmental stage, knowledge level, and readiness for action",
      "C) Assuming all clients need the same interventions",
      "D) Avoiding challenging clients to growth"
    ],
    correct: 1,
    explanation: "Starting where the client is means tailoring interventions to their developmental readiness (crystallized vs. ambivalent), prior knowledge and skills, life circumstances, and current emotional capacity. This honors the client's actual starting point rather than imposing a standard approach."
  },
  {
    domain: "Career Development",
    question: "Which assessment finding would suggest that career indecision reflects a need for more information versus psychological distress?",
    options: [
      "A) The client cannot identify any interests or values",
      "B) The client expresses anxiety about career decisions",
      "C) The client can articulate interests but needs occupational knowledge to evaluate options",
      "D) All indecision indicates psychological distress requiring referral"
    ],
    correct: 2,
    explanation: "Information-based indecision is often resolved through career exploration and occupational information. Anxiety-based or developmental indecision requires different interventions. Career counselors should assess the source of indecision to provide appropriate referrals or direct career guidance."
  },
  {
    domain: "Career Development",
    question: "What does research on career success in underrepresented groups reveal about the role of mentorship?",
    options: [
      "A) Mentorship is not important for career advancement",
      "B) Formal mentorship programs eliminate all barriers",
      "C) Access to mentors and sponsors significantly impacts advancement opportunities and institutional navigation",
      "D) Mentors should be from the same demographic group exclusively"
    ],
    correct: 2,
    explanation: "Research clearly shows that mentorship and sponsorship dramatically influence career advancement, particularly for those without family connections to professional networks. Career counselors should help clients proactively build mentoring relationships and networks to access opportunity information and advocacy."
  },
  {
    domain: "Career Development",
    question: "In the context of career counseling, what is the distinction between 'needs' and 'values'?",
    options: [
      "A) They are identical concepts",
      "B) Needs are requirements for well-being; values are what individuals believe is important",
      "C) Values are less important than needs in career decisions",
      "D) Needs are only relevant in impoverished populations"
    ],
    correct: 1,
    explanation: "Needs encompass psychological and material requirements for functioning (safety, autonomy, belonging). Values are what individuals prioritize as meaningful (achievement, service, creativity). A job can meet needs without aligning with values, leading to discontent despite adequate income."
  },
  {
    domain: "Career Development",
    question: "Which contemporary career development concern is particularly relevant for millennials and Gen Z workers?",
    options: [
      "A) Finding a single career to pursue for decades",
      "B) Portfolio careers, gig work, purpose-driven work, and frequent job changes",
      "C) Strict loyalty to one organization",
      "D) Minimizing focus on work-life integration"
    ],
    correct: 1,
    explanation: "Younger cohorts are more likely to experience or pursue non-linear careers, multiple concurrent roles, and prioritize values alignment and purpose over stability. Career counseling with these groups should address portfolio development, gig work navigation, and intentional career design."
  },
  {
    domain: "Career Development",
    question: "What role do early career exploration activities (job shadowing, internships, part-time work) play in career development?",
    options: [
      "A) They are unnecessary if assessment tools are used",
      "B) They provide direct experience, reality-testing, and skill development that enhance subsequent decisions",
      "C) They delay career commitment and should be minimized",
      "D) They are only valuable for undecided individuals"
    ],
    correct: 1,
    explanation: "Experiential learning through job exposure is a crucial component of career development, particularly in adolescence and early adulthood. These experiences provide tangible information about work environments, confirm or challenge interests, and build self-efficacy through applied skill development."
  },
  {
    domain: "Career Development",
    question: "When career counseling is integrated with academic advising, which student outcome is MOST strongly supported?",
    options: [
      "A) Higher test scores",
      "B) Clearer career direction and more intentional academic choices aligned with career goals",
      "C) Increased sense of pressure and stress",
      "D) Less diversity in major selection"
    ],
    correct: 1,
    explanation: "Integrating career counseling with academic advising helps students make intentional choices about courses and majors that align with emerging career directions. This integration increases clarity, reduces indecision-related anxiety, and improves retention through purposeful engagement."
  },
  {
    domain: "Career Development",
    question: "Which career development consideration is MOST important for individuals with ADHD or learning differences?",
    options: [
      "A) Assuming they cannot hold professional jobs",
      "B) Identifying career environments that accommodate their strengths (e.g., high-stimulation, hands-on, flexible structures) and addressing support needs",
      "C) Recommending only sheltered work",
      "D) Treating ADHD as irrelevant to career planning"
    ],
    correct: 1,
    explanation: "Individuals with ADHD and learning differences have distinct strengths and vulnerabilities that interact with work environments. Effective career counseling helps identify fields and work structures that leverage hyperfocus, creativity, and energy while accommodating challenges through accommodation or adapted work design."
  },
  {
    domain: "Career Development",
    question: "In career counseling, the concept of 'career calling' is MOST strongly supported by research in which domain?",
    options: [
      "A) All occupations equally",
      "B) Only helping professions (teaching, nursing, counseling, ministry)",
      "C) High-paying professions exclusively",
      "D) Any field where individuals perceive meaningful contribution and values alignment"
    ],
    correct: 3,
    explanation: "While calling originated in religious contexts, research shows that calling—a sense of purpose and meaningful contribution—can occur across any occupation. What matters is the individual's perception of meaning and alignment with values, not the occupational category."
  },
  {
    domain: "Career Development",
    question: "Which element is MOST critical in designing career counseling for high school students to promote equity in opportunity and access?",
    options: [
      "A) Focusing only on college preparation paths",
      "B) Providing comprehensive occupational information on diverse pathways including apprenticeships, technical trades, and various educational routes",
      "C) Assuming all students should aspire to four-year universities",
      "D) Limiting career exploration to common local occupations"
    ],
    correct: 1,
    explanation: "Equitable career counseling in schools requires comprehensive information about diverse pathways (college, apprenticeships, technical training, entrepreneurship, military). This prevents counselors from inadvertently narrowing low-income or underrepresented students' options to only college when other paths may better fit their strengths and goals."
  }
];

module.exports = { CAREER_QUESTIONS };
