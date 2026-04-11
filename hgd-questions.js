const HGD_QUESTIONS = [
  {
    domain: "Human Growth & Development",
    question: "According to Erikson's psychosocial theory, which stage is characterized by the conflict between generativity and stagnation?",
    options: ["A) Young adulthood (20-40)", "B) Middle adulthood (40-65)", "C) Adolescence (12-18)", "D) Late adulthood (65+)"],
    correct: 1,
    explanation: "Erikson identified generativity vs. stagnation as the central conflict of middle adulthood (approximately 40-65 years), when individuals focus on contributing to the next generation and leaving a lasting legacy."
  },
  {
    domain: "Human Growth & Development",
    question: "In Piaget's theory, the ability to understand that objects continue to exist when out of sight is called:",
    options: ["A) Object constancy", "B) Object permanence", "C) Conservation", "D) Centration"],
    correct: 1,
    explanation: "Object permanence, typically developing in the sensorimotor stage (8-18 months), refers to the infant's understanding that objects persist even when not visible, a critical cognitive milestone."
  },
  {
    domain: "Human Growth & Development",
    question: "Which of Kohlberg's moral development stages is characterized by the 'right' being whatever the individual's cultural context defines as right?",
    options: ["A) Preconventional", "B) Conventional", "C) Postconventional", "D) Unconventional"],
    correct: 1,
    explanation: "The conventional stage (stages 3-4) involves conforming to social rules and authority; individuals adopt their culture's moral standards as their own without question."
  },
  {
    domain: "Human Growth & Development",
    question: "Vygotsky's 'Zone of Proximal Development' refers to:",
    options: ["A) The gap between actual and potential development with adult support", "B) The cognitive abilities a child has already mastered", "C) The maximum age range for learning new skills", "D) The developmental stage immediately following concrete operations"],
    correct: 0,
    explanation: "The ZPD is the space between what a child can do independently and what they can do with guided assistance from a more knowledgeable other, emphasizing the social nature of learning."
  },
  {
    domain: "Human Growth & Development",
    question: "According to Bowlby's attachment theory, which attachment style is associated with inconsistent parenting and results in clingy, anxious behavior?",
    options: ["A) Secure attachment", "B) Avoidant attachment", "C) Ambivalent/resistant attachment", "D) Disorganized attachment"],
    correct: 2,
    explanation: "Ambivalent attachment develops when caregiving is inconsistent or unpredictable, causing children to be clingy and anxious, unable to trust their caregiver's availability."
  },
  {
    domain: "Human Growth & Development",
    question: "In Ainsworth's classification of attachment styles, 'disorganized attachment' is most often associated with:",
    options: ["A) Overly permissive parenting", "B) Neglectful parenting", "C) Parental behavior that is frightening or abusive", "D) Excessive praise and validation"],
    correct: 2,
    explanation: "Disorganized attachment typically results when the caregiver is the source of fear or harm, creating an irresolvable dilemma for the child who must approach the source of distress."
  },
  {
    domain: "Human Growth & Development",
    question: "Bronfenbrenner's ecological systems model includes five levels. Which level includes the interaction between immediate systems (e.g., family and school)?",
    options: ["A) Microsystem", "B) Mesosystem", "C) Exosystem", "D) Macrosystem"],
    correct: 1,
    explanation: "The mesosystem represents connections and interactions between microsystems; for example, how the school environment and family environment interact and influence development."
  },
  {
    domain: "Human Growth & Development",
    question: "According to Freud's psychosexual stages, fixation in the oral stage may result in:",
    options: ["A) Excessive independence and dominance", "B) Obsessive cleanliness and rigidity", "C) Dependence, oral aggression, or substance abuse", "D) Difficulty forming same-sex relationships"],
    correct: 2,
    explanation: "Oral stage fixation (ages 0-18 months) may lead to dependency needs, oral behaviors like smoking, or aggressive tendencies due to unmet or over-satisfied dependency needs."
  },
  {
    domain: "Human Growth & Development",
    question: "Which of Freud's psychosexual stages corresponds to the development of the superego and moral conscience?",
    options: ["A) Anal stage", "B) Phallic stage", "C) Latency stage", "D) Genital stage"],
    correct: 1,
    explanation: "In the phallic stage (3-6 years), children resolve the Oedipal complex, resulting in identification with the same-sex parent and the emergence of conscience and moral standards."
  },
  {
    domain: "Human Growth & Development",
    question: "Kübler-Ross's five stages of grief include denial, anger, bargaining, depression, and acceptance. These stages are best understood as:",
    options: ["A) A rigid sequence all individuals must follow", "B) A flexible framework that may not be linear or universal", "C) Occurring only in terminal illness", "D) Lasting approximately 6 months total"],
    correct: 1,
    explanation: "Contemporary understanding recognizes that grief is individual; people may move through stages nonlinearly, skip stages, or re-experience stages, and the model applies to various losses."
  },
  {
    domain: "Human Growth & Development",
    question: "In the context of grief and loss, 'complicated grief' is distinguished from normal grief by:",
    options: ["A) The length of time since the loss", "B) Intense grief persisting beyond 12 months with significant functional impairment", "C) The expression of anger during the grieving process", "D) The refusal to engage in grief work"],
    correct: 1,
    explanation: "Complicated grief involves prolonged, intense grief with functional deterioration beyond expected timeframes; it may benefit from specialized clinical intervention."
  },
  {
    domain: "Human Growth & Development",
    question: "The family life cycle stage in which couples must renegotiate their relationship after children leave home is called:",
    options: ["A) Launching", "B) Empty nest", "C) Retirement", "D) Disengagement"],
    correct: 1,
    explanation: "The empty nest phase requires couples to redefine their relationship and identity beyond parenting roles, often prompting significant relational adjustments."
  },
  {
    domain: "Human Growth & Development",
    question: "According to McGoldrick's family life cycle model, the primary task for couples in the 'joining of families through marriage' stage is to:",
    options: ["A) Establish independence from families of origin", "B) Form an intimate couple identity while maintaining family connections", "C) Prepare for childbearing", "D) Establish financial independence"],
    correct: 1,
    explanation: "Early marriage requires forming a couple identity while appropriately differentating from families of origin—balancing autonomy with connection."
  },
  {
    domain: "Human Growth & Development",
    question: "Prenatal development is divided into three main periods. Which period sees the development of major body structures?",
    options: ["A) Germinal period (0-2 weeks)", "B) Embryonic period (3-8 weeks)", "C) Fetal period (9 weeks to birth)", "D) Neonatal period (birth to 4 weeks)"],
    correct: 1,
    explanation: "During the embryonic period, the major organs and body systems are formed; this is the most critical period for prenatal development and vulnerability to teratogens."
  },
  {
    domain: "Human Growth & Development",
    question: "Which of the following is a critical period in prenatal development when exposure to teratogens is most damaging?",
    options: ["A) The fetal period (18 weeks onward)", "B) The embryonic period (3-8 weeks)", "C) The third trimester", "D) Immediately after conception"],
    correct: 1,
    explanation: "The embryonic period is the most sensitive time for structural abnormalities; teratogenic exposure during weeks 3-8 carries the highest risk for birth defects."
  },
  {
    domain: "Human Growth & Development",
    question: "What is the relationship between maternal age and the risk of chromosomal abnormalities such as Down syndrome?",
    options: ["A) Younger maternal age increases risk", "B) Maternal age has no effect on chromosomal risk", "C) Risk increases significantly after age 35", "D) Risk is only elevated before age 20"],
    correct: 2,
    explanation: "Advanced maternal age (35+) significantly increases the risk of trisomy 21 and other chromosomal abnormalities due to deterioration of egg quality with age."
  },
  {
    domain: "Human Growth & Development",
    question: "Infants typically achieve which milestone during the sensorimotor stage (0-24 months)?",
    options: ["A) Symbolic thought and language development", "B) Goal-directed behavior and means-end relationships", "C) Conservation of volume", "D) Formal operational thinking"],
    correct: 1,
    explanation: "The sensorimotor stage involves learning through movement and sensation, culminating in the ability to understand cause-and-effect relationships and simple goal-directed actions."
  },
  {
    domain: "Human Growth & Development",
    question: "According to Piaget, children in the preoperational stage (2-7 years) are limited by 'centration,' which means:",
    options: ["A) They can focus on multiple aspects of a problem simultaneously", "B) They focus on only one aspect of a situation and ignore others", "C) They have developed the ability to reverse operations mentally", "D) They understand that objects maintain properties despite changes"],
    correct: 1,
    explanation: "Centration is the tendency to focus on one prominent feature and ignore other relevant aspects; for example, attending only to height in a conservation task while ignoring width."
  },
  {
    domain: "Human Growth & Development",
    question: "Which Piagetian limitation do children in the concrete operational stage (7-11 years) overcome?",
    options: ["A) Egocentrism", "B) Irreversibility", "C) Both egocentrism and irreversibility", "D) None of the above"],
    correct: 2,
    explanation: "Children in concrete operations develop conservation (understanding reversibility) and become less egocentric, though abstract thought still remains limited."
  },
  {
    domain: "Human Growth & Development",
    question: "Adolescence is characterized by rapid physical growth called 'the growth spurt.' This is primarily triggered by:",
    options: ["A) Increased caloric intake and nutrition", "B) Increased levels of sex hormones (testosterone and estrogen)", "C) More rigorous physical activity and exercise", "D) Increased cognitive capacity and mental effort"],
    correct: 1,
    explanation: "The adolescent growth spurt is driven by hormonal changes, particularly the surge in sex hormones at puberty, which trigger rapid increases in height and physical development."
  },
  {
    domain: "Human Growth & Development",
    question: "Identity formation is the central task of adolescence according to Erikson. During this stage, adolescents may engage in:",
    options: ["A) Role experimentation and exploration", "B) Consistent commitment to a single identity", "C) Complete rejection of parental values without exploration", "D) Withdrawal from social engagement"],
    correct: 0,
    explanation: "Identity vs. role confusion involves exploring different roles, values, and beliefs; adolescents experiment with identities before committing to a coherent sense of self."
  },
  {
    domain: "Human Growth & Development",
    question: "According to Marcia's identity status theory, an adolescent who has explored alternatives and committed to a self-chosen identity is in which status?",
    options: ["A) Foreclosure", "B) Identity diffusion", "C) Achieved identity", "D) Moratorium"],
    correct: 2,
    explanation: "Identity achievement represents successful completion of identity exploration and commitment; the individual has explored alternatives and made deliberate identity commitments."
  },
  {
    domain: "Human Growth & Development",
    question: "Adolescent egocentrism, as described by Elkind, includes the 'imaginary audience,' which refers to:",
    options: ["A) Hallucinations common in adolescence", "B) The belief that others are as preoccupied with the adolescent as they are", "C) The inability to imagine others' perspectives", "D) The tendency to create fictional characters"],
    correct: 1,
    explanation: "The imaginary audience reflects adolescents' heightened self-consciousness and belief that others are constantly evaluating them, contributing to self-consciousness and social anxiety."
  },
  {
    domain: "Human Growth & Development",
    question: "The 'personal fable' in adolescent egocentrism involves the belief that:",
    options: ["A) Everyone experiences the same emotions and situations", "B) One's own experiences and feelings are unique and misunderstood by others", "C) Adults understand adolescent experiences completely", "D) All adolescents share identical moral values"],
    correct: 1,
    explanation: "The personal fable is adolescents' belief in their own uniqueness and the conviction that no one else has experienced their particular circumstances or emotions."
  },
  {
    domain: "Human Growth & Development",
    question: "Risky behaviors in adolescence (substance use, reckless driving) are partly explained by:",
    options: ["A) Lack of moral development", "B) Asynchronous development of the limbic system and prefrontal cortex", "C) Consistent decision-making capacity across all domains", "D) Developmental regression"],
    correct: 1,
    explanation: "Adolescent neurobiological development involves early limbic system maturation but delayed prefrontal cortex development, creating a mismatch between emotional reactivity and executive function."
  },
  {
    domain: "Human Growth & Development",
    question: "Peer relationships during adolescence serve which of the following functions?",
    options: ["A) Reinforcement of parental values and authority", "B) Identity formation, social support, and modeling alternative perspectives", "C) Complete replacement of family influence", "D) Preparation for retirement"],
    correct: 1,
    explanation: "Peer relationships during adolescence provide crucial opportunities for identity exploration, emotional support, and developing social competence outside the family system."
  },
  {
    domain: "Human Growth & Development",
    question: "In Erikson's theory, the central conflict of early adulthood (20-40) is:",
    options: ["A) Industry vs. inferiority", "B) Intimacy vs. isolation", "C) Identity vs. role confusion", "D) Generativity vs. stagnation"],
    correct: 1,
    explanation: "Early adulthood involves the conflict between forming intimate relationships and remaining isolated; successful resolution leads to love and commitment."
  },
  {
    domain: "Human Growth & Development",
    question: "Levinson's seasons of life theory describes adult development as:",
    options: ["A) A steady, linear progression", "B) A series of relatively stable periods punctuated by transitional crises", "C) Determined entirely by societal expectations", "D) Nonexistent after age 30"],
    correct: 1,
    explanation: "Levinson identified recurring patterns of stable periods and transitions; adults experience developmental crises during transition periods as they re-evaluate goals and direction."
  },
  {
    domain: "Human Growth & Development",
    question: "The 'midlife crisis' or midlife transition typically occurs in:",
    options: ["A) The late 20s to early 30s", "B) The 40s to early 50s", "C) The 60s", "D) Equally across all ages"],
    correct: 1,
    explanation: "Midlife transition (typically 40s-50s) involves reassessment of life accomplishments, mortality awareness, and potential redirecting of life goals and priorities."
  },
  {
    domain: "Human Growth & Development",
    question: "According to Peck's theory of later adulthood, which of the following is NOT one of his proposed developmental tasks?",
    options: ["A) Ego differentiation vs. work-role preoccupation", "B) Body transcendence vs. body preoccupation", "C) Generativity vs. self-absorption", "D) Ego transcendence vs. ego preoccupation"],
    correct: 2,
    explanation: "Peck emphasized ego differentiation, body transcendence, and ego transcendence as the key tasks of older adulthood; generativity vs. self-absorption is Erikson's middle age task."
  },
  {
    domain: "Human Growth & Development",
    question: "Late adulthood is characterized by which psychosocial conflict according to Erikson?",
    options: ["A) Generativity vs. stagnation", "B) Integrity vs. despair", "C) Industry vs. inferiority", "D) Initiative vs. guilt"],
    correct: 1,
    explanation: "The final stage (65+) involves reflecting on one's life; integrity reflects acceptance and meaning-making, while despair reflects regret and dissatisfaction."
  },
  {
    domain: "Human Growth & Development",
    question: "Which of the following best describes 'gerontology'?",
    options: ["A) The study of disease in the elderly", "B) The medical specialty treating elderly patients", "C) The multidisciplinary study of aging and the elderly", "D) The study of death and dying"],
    correct: 2,
    explanation: "Gerontology is an interdisciplinary field examining biological, psychological, and social aspects of aging; geriatrics is the medical specialty."
  },
  {
    domain: "Human Growth & Development",
    question: "The theory that aging results from the accumulation of cellular damage and mutations over time is called:",
    options: ["A) Disengagement theory", "B) Wear-and-tear theory", "C) Activity theory", "D) Continuity theory"],
    correct: 1,
    explanation: "Wear-and-tear theory proposes that aging results from accumulated cellular and molecular damage; this is one biological explanation for aging processes."
  },
  {
    domain: "Human Growth & Development",
    question: "Disengagement theory proposes that aging involves:",
    options: ["A) Continued engagement in social roles and activities", "B) Mutual withdrawal between the individual and society", "C) Increased cognitive activity and learning", "D) Greater social connection and interdependence"],
    correct: 1,
    explanation: "Disengagement theory (Cumming & Henry) suggests that normal aging involves mutual withdrawal between individuals and society; however, this theory is now largely criticized as it ignores individual variation."
  },
  {
    domain: "Human Growth & Development",
    question: "Activity theory of aging posits that:",
    options: ["A) Older adults naturally disengage from social roles", "B) Maintaining activity, social engagement, and roles promotes healthy aging", "C) Physical activity alone determines successful aging", "D) Older adults should retire from all responsibilities"],
    correct: 1,
    explanation: "Activity theory emphasizes that maintaining social connections, productive roles, and mental engagement contributes to well-being and life satisfaction in later life."
  },
  {
    domain: "Human Growth & Development",
    question: "Continuity theory of aging suggests that:",
    options: ["A) All older adults become more similar", "B) Personality and lifestyle patterns remain consistent across the lifespan", "C) Aging requires complete life restructuring", "D) Individual differences decrease with age"],
    correct: 1,
    explanation: "Continuity theory proposes that individuals maintain consistent personality traits, values, and lifestyle patterns throughout aging, adapting these patterns to changing circumstances."
  },
  {
    domain: "Human Growth & Development",
    question: "Successful aging, according to Rowe and Kahn's model, requires:",
    options: ["A) Absence of disease and disability alone", "B) High physical and cognitive functioning with active engagement", "C) Disengagement from social responsibilities", "D) Acceptance of decline as inevitable"],
    correct: 1,
    explanation: "Rowe and Kahn's model defines successful aging as low disease risk, maintained cognitive and physical capacity, and continued engagement in life activities."
  },
  {
    domain: "Human Growth & Development",
    question: "Cognitive changes in normal aging include:",
    options: ["A) Universal decline in all cognitive functions", "B) Fluid intelligence decline, but crystallized intelligence remains stable or increases", "C) Complete preservation of all cognitive abilities", "D) Immediate and dramatic loss of memory"],
    correct: 1,
    explanation: "Normal aging shows selective cognitive changes: fluid intelligence (processing speed, working memory) declines, but crystallized intelligence (knowledge, vocabulary) often remains stable or improves."
  },
  {
    domain: "Human Growth & Development",
    question: "Which of the following is a distinguishing feature of dementia versus normal aging?",
    options: ["A) Memory loss", "B) Cognitive decline beyond expected for age, with functional impairment", "C) Occasional forgetfulness", "D) Slowed processing speed"],
    correct: 1,
    explanation: "Dementia involves cognitive decline significantly worse than expected for age and education, with functional impairment; normal aging involves slower processing and occasional forgetfulness without functional decline."
  },
  {
    domain: "Human Growth & Development",
    question: "Which learning theory emphasizes reinforcement and punishment in shaping behavior?",
    options: ["A) Cognitive learning theory", "B) Classical conditioning", "C) Operant conditioning", "D) Social learning theory"],
    correct: 2,
    explanation: "Operant conditioning (Skinner) focuses on how reinforcement and punishment shape and maintain behavior; behaviors followed by positive consequences are more likely to recur."
  },
  {
    domain: "Human Growth & Development",
    question: "Social learning theory (Bandura) emphasizes that learning occurs through:",
    options: ["A) Direct reinforcement alone", "B) Classical conditioning reflexively", "C) Observation, modeling, and imitation", "D) Innate instincts"],
    correct: 2,
    explanation: "Social learning theory highlights that people learn through observing others' behavior and its consequences, then imitating observed models—not solely through direct reinforcement."
  },
  {
    domain: "Human Growth & Development",
    question: "Bandura's concept of 'self-efficacy' refers to:",
    options: ["A) The outcomes a person expects from actions", "B) A person's belief in their ability to execute actions to achieve outcomes", "C) The external reinforcements received for behavior", "D) The hereditary component of personality"],
    correct: 1,
    explanation: "Self-efficacy is an individual's confidence in their capability to perform specific behaviors or tasks; it influences motivation, persistence, and the effort invested in activities."
  },
  {
    domain: "Human Growth & Development",
    question: "According to attachment theory, secure attachment in infancy predicts:",
    options: ["A) Later independence without peer relationships", "B) Later secure relationships, resilience, and better mental health outcomes", "C) Rigid, inflexible personality structure", "D) Difficulty forming any relationships"],
    correct: 1,
    explanation: "Longitudinal research shows that secure infant attachment is associated with better emotional regulation, healthier relationships, greater resilience, and fewer behavioral problems."
  },
  {
    domain: "Human Growth & Development",
    question: "Temperament, as distinguished from personality, refers to:",
    options: ["A) Learned behaviors and social skills", "B) Inborn, biologically-based behavioral predispositions", "C) Parenting style influences", "D) Cultural values and beliefs"],
    correct: 1,
    explanation: "Temperament describes innate, genetically-influenced behavioral and emotional characteristics present from infancy; personality develops from temperament, experience, and environment."
  },
  {
    domain: "Human Growth & Development",
    question: "Thomas and Chess identified three main temperament types. Which is characterized as slow to warm up and initially withdrawn?",
    options: ["A) Easy temperament", "B) Difficult temperament", "C) Slow-to-warm-up temperament", "D) Anxious temperament"],
    correct: 2,
    explanation: "The slow-to-warm-up temperament involves initial withdrawal from new situations, gradual adaptation with repeated exposure, and mild negative emotionality."
  },
  {
    domain: "Human Growth & Development",
    question: "The 'goodness of fit' concept in child development refers to:",
    options: ["A) The child's physical attractiveness", "B) The compatibility between the child's temperament and environmental demands", "C) Academic achievement levels", "D) Parental satisfaction with the child"],
    correct: 1,
    explanation: "Goodness of fit describes how well a child's temperament matches environmental expectations and parenting approaches; poor fit increases stress and adjustment problems."
  },
  {
    domain: "Human Growth & Development",
    question: "Resilience in children is best promoted by:",
    options: ["A) Absence of all stress and adversity", "B) Warm, supportive relationships and cognitive coping strategies", "C) Punishment and strict discipline", "D) Overindulgence and complete protection from difficulty"],
    correct: 1,
    explanation: "Research on resilient children shows that secure relationships, supportive adults, and opportunities to develop problem-solving skills foster the ability to adapt despite adversity."
  },
  {
    domain: "Human Growth & Development",
    question: "Which of the following is NOT typically a factor contributing to childhood resilience?",
    options: ["A) Secure attachment and supportive relationships", "B) Cognitive coping skills and problem-solving", "C) Exposure to chronic abuse or trauma", "D) Internal locus of control"],
    correct: 2,
    explanation: "Chronic trauma and abuse undermine resilience; protective factors include secure relationships, coping skills, and an internal sense of control, not continued exposure to harmful conditions."
  },
  {
    domain: "Human Growth & Development",
    question: "The concept of 'scaffolding' in education is derived from which developmental theorist's work?",
    options: ["A) Piaget", "B) Vygotsky", "C) Erikson", "D) Freud"],
    correct: 1,
    explanation: "Scaffolding extends Vygotsky's ZPD concept; educators provide temporary support that gradually decreases as the learner's competence increases."
  },
  {
    domain: "Human Growth & Development",
    question: "Mirror neurons are theorized to support which developmental process?",
    options: ["A) Object permanence", "B) Conservation", "C) Observational learning and empathy", "D) Moral development"],
    correct: 2,
    explanation: "Mirror neurons activate both when performing actions and observing others performing them, providing a neurobiological basis for imitation, observational learning, and empathetic understanding."
  },
  {
    domain: "Human Growth & Development",
    question: "Which brain structure is critical for memory formation and shows developmental changes throughout childhood?",
    options: ["A) Cerebellum", "B) Hippocampus", "C) Medulla", "D) Corpus callosum"],
    correct: 1,
    explanation: "The hippocampus is essential for forming new declarative memories; it undergoes significant structural development during childhood and is more vulnerable to stress and adversity."
  },
  {
    domain: "Human Growth & Development",
    question: "Myelination of neural fibers, which improves processing speed and coordination, continues into:",
    options: ["A) Early childhood (ages 3-5)", "B) Adolescence (ages 12-18)", "C) Early adulthood (ages 20-25)", "D) Late adulthood"],
    correct: 2,
    explanation: "Myelination, the process of insulating neural fibers, continues throughout adolescence and into early adulthood; completion of certain fiber myelination may extend into the 20s."
  },
  {
    domain: "Human Growth & Development",
    question: "Synaptic pruning during adolescence involves:",
    options: ["A) Growth of all neural connections equally", "B) Elimination of unused neural connections and strengthening of frequently used ones", "C) Death of neurons", "D) Formation of new brain regions"],
    correct: 1,
    explanation: "Synaptic pruning is the selective elimination of neural connections not regularly used; this increases neural efficiency and is particularly active during adolescence."
  },
  {
    domain: "Human Growth & Development",
    question: "Neuroplasticity refers to:",
    options: ["A) The fixed nature of neural structures", "B) The brain's ability to reorganize and form new neural connections throughout life", "C) The development of the brain during fetal stages only", "D) The degeneration of neurons with age"],
    correct: 1,
    explanation: "Neuroplasticity is the brain's capacity to reorganize itself by forming new neural connections in response to experience, injury, or learning—it continues throughout the lifespan."
  },
  {
    domain: "Human Growth & Development",
    question: "Experience-dependent brain development refers to:",
    options: ["A) Universal developmental processes that all children experience", "B) Brain development shaped by specific experiences and environmental input", "C) Development that occurs only in infancy", "D) Innate processes unaffected by environment"],
    correct: 1,
    explanation: "Experience-dependent development involves neural changes based on specific, individual experiences; this differs from experience-expectant development, which relies on expectable environmental input."
  },
  {
    domain: "Human Growth & Development",
    question: "The 'critical period' for language development suggests that:",
    options: ["A) Language can only be learned before age 5", "B) Language is most easily acquired during certain sensitive periods, particularly before adolescence", "C) Language development has no timeline", "D) Bilingualism is impossible after age 3"],
    correct: 1,
    explanation: "Critical periods are windows of heightened sensitivity for specific developmental processes; language has a sensitive period extending through childhood and early adolescence."
  },
  {
    domain: "Human Growth & Development",
    question: "Fetal alcohol spectrum disorders result from:",
    options: ["A) Maternal smoking alone", "B) Prenatal alcohol exposure", "C) Poor postnatal nutrition", "D) Genetic predisposition without environmental factors"],
    correct: 1,
    explanation: "FASD encompasses developmental disorders caused by prenatal alcohol exposure; severity depends on exposure timing, amount, and individual vulnerability."
  },
  {
    domain: "Human Growth & Development",
    question: "Secure base behavior in infants refers to:",
    options: ["A) Clinging to the caregiver at all times", "B) Using the caregiver as a secure base from which to explore and return to", "C) Avoiding separation from the caregiver completely", "D) Showing no reaction to caregiver's presence"],
    correct: 1,
    explanation: "Secure base behavior involves the infant exploring the environment, returning to the caregiver for reassurance, and gaining confidence to explore again—a sign of secure attachment."
  },
  {
    domain: "Human Growth & Development",
    question: "Separation anxiety in infants typically emerges around:",
    options: ["A) 2-3 months", "B) 6-8 months", "C) 12-18 months", "D) 2-3 years"],
    correct: 1,
    explanation: "Separation anxiety typically develops around 6-8 months, coinciding with object permanence; the infant understands the caregiver still exists when absent and experiences distress."
  },
  {
    domain: "Human Growth & Development",
    question: "According to research on parenting styles (Baumrind), which parenting approach combines warmth with clear boundaries and expectations?",
    options: ["A) Authoritarian", "B) Permissive", "C) Authoritative", "D) Uninvolved"],
    correct: 2,
    explanation: "Authoritative parenting balances warmth and responsiveness with structure and clear expectations; it is associated with the most positive child outcomes including competence and emotional adjustment."
  },
  {
    domain: "Human Growth & Development",
    question: "Which parenting style is characterized by high control and demands but low warmth and responsiveness?",
    options: ["A) Authoritative", "B) Authoritarian", "C) Permissive", "D) Indulgent"],
    correct: 1,
    explanation: "Authoritarian parenting emphasizes obedience and control with little warmth or explanation; children may show compliance but often struggle with autonomy and may resent authority."
  },
  {
    domain: "Human Growth & Development",
    question: "Permissive parenting is characterized by:",
    options: ["A) High control and clear boundaries", "B) Low warmth and little involvement", "C) High warmth but few rules or boundaries", "D) High expectations and structured environment"],
    correct: 2,
    explanation: "Permissive parents are warm and responsive but provide little structure or discipline; children may lack self-regulation and impulse control."
  },
  {
    domain: "Human Growth & Development",
    question: "Uninvolved (neglectful) parenting is associated with which of the following outcomes?",
    options: ["A) High academic achievement", "B) Strong emotional regulation", "C) Behavioral problems, academic difficulties, and emotional distress", "D) Superior social skills"],
    correct: 2,
    explanation: "Uninvolved parenting, characterized by low warmth and low control, is associated with the poorest outcomes including behavioral problems, academic struggles, and mental health issues."
  },
  {
    domain: "Human Growth & Development",
    question: "The development of theory of mind (understanding that others have beliefs different from one's own) typically occurs at:",
    options: ["A) 18-24 months", "B) 3-4 years", "C) 6-7 years", "D) 10-12 years"],
    correct: 1,
    explanation: "Theory of mind develops gradually; by ages 3-4, children typically understand false beliefs and recognize that others can have different knowledge or perspectives."
  },
  {
    domain: "Human Growth & Development",
    question: "Menopause in women is primarily characterized by:",
    options: ["A) Sudden complete cessation of reproductive capacity", "B) Declining estrogen and progesterone levels resulting in cessation of menstruation", "C) Immediate loss of all hormonal function", "D) Predictable symptoms lasting exactly one year"],
    correct: 1,
    explanation: "Menopause involves gradual hormonal changes; estrogen and progesterone decline, leading to irregular menses and eventual cessation, typically occurring between ages 48-55."
  },
  {
    domain: "Human Growth & Development",
    question: "Which of the following is NOT typically associated with menopause?",
    options: ["A) Hot flashes", "B) Mood changes", "C) Increased fertility", "D) Sleep disruption"],
    correct: 2,
    explanation: "Menopause is associated with hot flashes, mood changes, and sleep issues; fertility decreases during perimenopause and ends at menopause."
  },
  {
    domain: "Human Growth & Development",
    question: "Erectile dysfunction in older men may be related to:",
    options: ["A) Normal, inevitable aging", "B) Psychological factors alone", "C) Vascular changes, hormonal changes, medications, and psychological factors", "D) Lack of attraction to partners"],
    correct: 2,
    explanation: "Erectile dysfunction is multifactorial, involving vascular health, testosterone levels, medications, and psychological factors; it is not a normal, inevitable part of aging."
  },
  {
    domain: "Human Growth & Development",
    question: "According to research, which of the following promotes life satisfaction in older adults?",
    options: ["A) Complete withdrawal from social activities", "B) Maintenance of meaningful relationships and purposeful activities", "C) Focus on physical appearance", "D) Isolation to avoid stress"],
    correct: 1,
    explanation: "Research consistently shows that maintaining social connections, engaging in meaningful activities, and having a sense of purpose contribute significantly to life satisfaction in later life."
  },
  {
    domain: "Human Growth & Development",
    question: "The concept of 'elderhood' emphasizes:",
    options: ["A) Decline and loss in aging", "B) Wisdom, continued growth, and meaningful contributions", "C) Dependence on others", "D) Irrelevance in society"],
    correct: 1,
    explanation: "Modern gerontology's concept of elderhood recognizes older adults as active agents capable of wisdom, personal growth, and valuable social contributions."
  },
  {
    domain: "Human Growth & Development",
    question: "Bereavement following the death of a spouse in later life may be complicated by:",
    options: ["A) The expectedness of death in old age", "B) Loss of identity, practical skills, and social roles along with emotional loss", "C) Lack of emotional significance in late-life marriages", "D) Immediate adaptation without difficulty"],
    correct: 1,
    explanation: "Spousal bereavement in later life involves multiple losses: identity, social roles, daily companionship, and sometimes practical skills; the longer the marriage, the greater the identity disruption."
  },
  {
    domain: "Human Growth & Development",
    question: "Anticipatory grief differs from normal grief in that it:",
    options: ["A) Occurs after the death", "B) Is not a valid form of grief", "C) Occurs before the expected death of a loved one", "D) Only happens in children"],
    correct: 2,
    explanation: "Anticipatory grief is experienced before an expected death; it may allow time for closure but can also complicate emotions and adjustment after the actual death."
  },
  {
    domain: "Human Growth & Development",
    question: "Disenfranchised grief refers to:",
    options: ["A) Grief that is socially recognized and supported", "B) Grief for losses not recognized by society as legitimately sad", "C) Grief only in response to death", "D) Grief that resolves quickly"],
    correct: 1,
    explanation: "Disenfranchised grief involves losses not openly acknowledged or socially validated (e.g., loss of a same-sex partner, loss of a never-born child, loss of a relationship due to divorce)."
  },
  {
    domain: "Human Growth & Development",
    question: "In cross-cultural studies of grief, which of the following has been found?",
    options: ["A) Grief is identical across all cultures", "B) Some cultures do not experience grief", "C) Expression and experience of grief vary significantly across cultures", "D) Grief responses are solely biologically determined"],
    correct: 2,
    explanation: "Culture shapes how grief is expressed, experienced, and processed; acceptable expressions, duration, and rituals vary widely across cultural and religious traditions."
  },
  {
    domain: "Human Growth & Development",
    question: "Dual process model of grief (Stroebe & Schut) proposes that grieving involves:",
    options: ["A) Only acceptance of loss", "B) Only avoiding the loss", "C) Oscillation between loss-oriented coping and restoration-oriented coping", "D) Simultaneous suppression of all emotions"],
    correct: 2,
    explanation: "The dual process model suggests healthy grief involves moving between focusing on the loss (loss-oriented) and adjusting to life changes (restoration-oriented)."
  },
  {
    domain: "Human Growth & Development",
    question: "Which of the following factors has been shown to increase vulnerability to complicated grief?",
    options: ["A) Expected death after a long illness", "B) Traumatic or sudden death with limited preparation", "C) Strong social support networks", "D) Previous healthy grief experiences"],
    correct: 1,
    explanation: "Complicated grief risk increases with sudden/traumatic death, lack of warning, absence of social support, history of mental health issues, or dependent relationships."
  },
  {
    domain: "Human Growth & Development",
    question: "According to Worden's tasks of mourning, the first task involves:",
    options: ["A) Readjusting to the world without the deceased", "B) Accepting the reality of the loss", "C) Working through the pain and emotional experience", "D) Finding enduring connection with the deceased"],
    correct: 1,
    explanation: "Worden's first task is accepting the reality of the loss (both intellectually and emotionally), moving beyond denial or magical thinking."
  },
  {
    domain: "Human Growth & Development",
    question: "Horney's concept of the 'real self' versus the 'idealized self' relates to:",
    options: ["A) Psychosexual development stages", "B) The discrepancy between authentic identity and neurotic self-image", "C) Moral development levels", "D) Attachment styles"],
    correct: 1,
    explanation: "Horney proposed that neurosis develops when individuals create an idealized self-image based on external demands rather than acknowledging their authentic, real self."
  },
  {
    domain: "Human Growth & Development",
    question: "Havighurst's developmental task theory suggests that:",
    options: ["A) Development ends in early adulthood", "B) Each life stage has specific tasks and challenges to master", "C) Development is random and unpredictable", "D) All individuals experience identical tasks"],
    correct: 1,
    explanation: "Havighurst proposed that development involves mastering age-appropriate tasks; success promotes well-being and prepares for future tasks, while failure creates difficulties."
  },
  {
    domain: "Human Growth & Development",
    question: "Which of Havighurst's developmental tasks is primarily associated with early adulthood?",
    options: ["A) Developing industry and competence", "B) Accepting one's body and beginning peer relationships", "C) Selecting and learning to live with a mate", "D) Achieving social and civic responsibility"],
    correct: 2,
    explanation: "Havighurst identified selecting a mate and establishing a family as key early adulthood tasks (roughly ages 18-35)."
  },
  {
    domain: "Human Growth & Development",
    question: "The concept of 'optimal arousal' in development relates to:",
    options: ["A) Maximum possible stimulation for all individuals", "B) The level of stimulation that promotes best learning and functioning", "C) Complete lack of any stimulation", "D) Anxiety-inducing situations"],
    correct: 1,
    explanation: "Optimal arousal theory suggests that moderate levels of stimulation promote learning and well-being; too little or too much stimulation is detrimental."
  },
  {
    domain: "Human Growth & Development",
    question: "Sense of coherence (SOC) in health psychology refers to:",
    options: ["A) Physical attractiveness", "B) The ability to understand events as meaningful, manageable, and predictable", "C) Only emotional well-being", "D) Academic achievement"],
    correct: 1,
    explanation: "Sense of coherence, developed by Antonovsky, involves perceiving life events as comprehensible, manageable with available resources, and worthy of engagement—it promotes health and resilience."
  },
  {
    domain: "Human Growth & Development",
    question: "Which factor is most protective against suicide in adolescents?",
    options: ["A) Absence of any mental health symptoms", "B) Perceived social support and strong family connections", "C) Complete isolation from peers", "D) Achievement of academic perfection"],
    correct: 1,
    explanation: "Strong family relationships and social support are among the most significant protective factors against adolescent suicide; sense of belonging reduces risk substantially."
  },
  {
    domain: "Human Growth & Development",
    question: "The concept of 'identity foreclosure' in Marcia's theory involves:",
    options: ["A) Continued exploration of identity options", "B) Commitment to an identity based on others' expectations without exploring alternatives", "C) Rejection of all identity options", "D) Constant identity experimentation"],
    correct: 1,
    explanation: "Foreclosure occurs when adolescents commit to identities based on parental or societal expectations without exploring alternatives; identity formation may be incomplete."
  },
  {
    domain: "Human Growth & Development",
    question: "Research on adult development shows that personality change:",
    options: ["A) Never occurs after early adulthood", "B) Is entirely determined by genetics", "C) Can occur across the lifespan, particularly through intentional effort and significant life experiences", "D) Is independent of life circumstances"],
    correct: 2,
    explanation: "Contemporary research shows that personality is not fixed; individuals can change traits through conscious effort, therapeutic work, and significant life experiences throughout adulthood."
  },
  {
    domain: "Human Growth & Development",
    question: "The 'default mode network' in the brain is active when:",
    options: ["A) Engaging in focused external tasks", "B) The person is thinking about themselves and their life experiences", "C) During deep sleep only", "D) The person is in a coma"],
    correct: 1,
    explanation: "The default mode network activates during self-referential thinking and reflection on personal experiences; it's involved in identity formation, autobiographical memory, and mentalizing."
  },
  {
    domain: "Human Growth & Development",
    question: "Epigenetics suggests that:",
    options: ["A) Genes determine development entirely", "B) Environment has no influence on gene expression", "C) Environmental factors can influence gene expression without changing DNA sequence", "D) Development is purely environmental"],
    correct: 2,
    explanation: "Epigenetics demonstrates that environmental factors (stress, nutrition, experiences) can influence which genes are expressed; this shows the dynamic gene-environment interaction."
  },
  {
    domain: "Human Growth & Development",
    question: "Which of the following is an example of a sensitive period in human development?",
    options: ["A) The period from birth to age 3 for language acquisition", "B) The period from age 40-50 for forming new memories", "C) The period from age 65 onward for developing new interests", "D) The period from age 15-20 for physical growth"],
    correct: 0,
    explanation: "Sensitive periods are times when development is particularly responsive to environmental input; early childhood is a sensitive period for language, though plasticity continues."
  },
  {
    domain: "Human Growth & Development",
    question: "The 'still face' experiment by Tronick demonstrates that:",
    options: ["A) Infants are unresponsive to caregivers' emotional expressions", "B) Infants depend on caregiver responsiveness and become distressed when it's withdrawn", "C) Caregivers' emotions have no effect on infants", "D) Infants prefer unresponsive caregivers"],
    correct: 1,
    explanation: "When caregivers maintain emotionally neutral, unresponsive faces, infants become distressed, demonstrating the importance of caregiver responsiveness for infant well-being and development."
  },
  {
    domain: "Human Growth & Development",
    question: "Synchrony in parent-infant interaction refers to:",
    options: ["A) Perfect behavioral matching at all times", "B) The temporal coordination and mutual responsiveness between caregiver and infant", "C) Lack of any interaction", "D) One-directional caregiver behavior"],
    correct: 1,
    explanation: "Synchrony involves reciprocal, coordinated interaction; caregiver and infant take turns responding to each other, creating a dance-like quality that supports attachment and development."
  },
  {
    domain: "Human Growth & Development",
    question: "Which neurotransmitter system is particularly relevant to mood regulation and is implicated in depression?",
    options: ["A) Acetylcholine only", "B) Serotonin and norepinephrine systems", "C) Only GABA", "D) Glutamate alone"],
    correct: 1,
    explanation: "Serotonin and norepinephrine systems regulate mood; dysfunction in these systems is implicated in depression, and many antidepressants target these neurotransmitters."
  },
  {
    domain: "Human Growth & Development",
    question: "The structural changes in the prefrontal cortex during adolescence support:",
    options: ["A) Decreased ability to think abstractly", "B) Increased impulse control, long-term planning, and abstract reasoning", "C) Greater egocentrism", "D) Loss of emotional capacity"],
    correct: 1,
    explanation: "Maturation and myelination of the prefrontal cortex during adolescence enhances executive functions including impulse control, planning, abstract thought, and moral reasoning."
  },
  {
    domain: "Human Growth & Development",
    question: "According to Stern's work on interpersonal neurobiology, what is transmitted between infant and caregiver?",
    options: ["A) Only genetic information", "B) Implicit relational knowing and emotional regulation patterns through nonverbal interaction", "C) Only verbal language", "D) Nothing of developmental significance"],
    correct: 1,
    explanation: "Stern emphasizes that implicit learning through caregiver attunement transmits emotional regulation patterns and relational expectations, shaping the infant's developing nervous system."
  },
  {
    domain: "Human Growth & Development",
    question: "Intergenerational transmission of trauma suggests that:",
    options: ["A) Trauma experienced by one generation has no effect on the next", "B) Trauma effects can be passed to subsequent generations through parenting patterns and gene expression", "C) Only genetic trauma is heritable", "D) Children are unaffected by parental trauma"],
    correct: 1,
    explanation: "Research indicates that parental trauma can affect parenting behaviors, attachment patterns, and potentially epigenetic changes, influencing the next generation's emotional development and stress response."
  }
];

module.exports = { HGD_QUESTIONS };
