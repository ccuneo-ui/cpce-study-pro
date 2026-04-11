const HELPING_QUESTIONS = [
  {
    domain: "Helping Relationships",
    question: "Which of the following is a core concept in Carl Rogers' person-centered therapy?",
    options: [
      "A) Unconditional positive regard and congruence",
      "B) Cognitive distortions and automatic thoughts",
      "C) Early childhood conflicts and defense mechanisms",
      "D) Irrational beliefs and disputation"
    ],
    correct: 0,
    explanation: "Rogers emphasized unconditional positive regard, empathy, and counselor congruence as essential conditions for therapeutic change. These core conditions form the foundation of person-centered approaches."
  },
  {
    domain: "Helping Relationships",
    question: "In Albert Ellis' Rational Emotive Behavior Therapy (REBT), what is the primary focus of intervention?",
    options: [
      "A) Identifying and modifying irrational beliefs",
      "B) Exploring unconscious conflicts",
      "C) Developing adaptive coping strategies",
      "D) Creating behavioral hierarchies"
    ],
    correct: 0,
    explanation: "REBT targets irrational beliefs as the root cause of emotional distress, using disputation and cognitive restructuring to help clients adopt more rational perspectives."
  },
  {
    domain: "Helping Relationships",
    question: "Which therapeutic approach emphasizes the importance of 'automatic thoughts' and their relationship to mood and behavior?",
    options: [
      "A) Psychoanalytic therapy",
      "B) Cognitive-behavioral therapy (CBT)",
      "C) Existential therapy",
      "D) Gestalt therapy"
    ],
    correct: 1,
    explanation: "Aaron Beck's cognitive therapy identifies automatic thoughts as mediators between situations and emotional responses, making them a central focus of CBT interventions."
  },
  {
    domain: "Helping Relationships",
    question: "In Gestalt therapy, what does 'awareness' or 'contact' in the present moment refer to?",
    options: [
      "A) Achieving insight into past traumas",
      "B) Being fully engaged with the here-and-now experience",
      "C) Developing rational thought patterns",
      "D) Establishing a secure attachment with the therapist"
    ],
    correct: 1,
    explanation: "Fritz Perls emphasized present-moment awareness and authentic contact as central to Gestalt therapy, believing that healing occurs through present experiencing rather than past analysis."
  },
  {
    domain: "Helping Relationships",
    question: "Which of the following best describes transference in psychoanalytic therapy?",
    options: [
      "A) The therapist's unconscious responses to the client",
      "B) The client's projection of feelings from past relationships onto the therapist",
      "C) The development of a secure therapeutic alliance",
      "D) The client's resistance to exploring unconscious material"
    ],
    correct: 1,
    explanation: "Transference occurs when clients redirect feelings and attitudes from significant figures in their lives onto the therapist, providing valuable material for exploration."
  },
  {
    domain: "Helping Relationships",
    question: "In object relations theory, what is meant by 'internal objects'?",
    options: [
      "A) Physical possessions that hold symbolic meaning",
      "B) Internalized mental representations of significant relationships",
      "C) Defense mechanisms used to cope with anxiety",
      "D) Behavioral patterns learned through conditioning"
    ],
    correct: 1,
    explanation: "Object relations theory, developed by theorists like Melanie Klein and Donald Winnicott, focuses on how internalized representations of relationships shape current functioning and emotional patterns."
  },
  {
    domain: "Helping Relationships",
    question: "Which of the following is a key principle of Adlerian therapy?",
    options: [
      "A) Social interest and feelings of belonging",
      "B) Unconscious drives and psychosexual development",
      "C) Cognitive distortions and maladaptive schemas",
      "D) Choice and personal responsibility"
    ],
    correct: 0,
    explanation: "Alfred Adler emphasized social interest (Gemeinschaftsgefühl), inferiority feelings, and lifestyle choices as central to understanding human behavior and promoting change."
  },
  {
    domain: "Helping Relationships",
    question: "In existential therapy, what concept refers to the individual's search for meaning and purpose?",
    options: [
      "A) Self-actualization",
      "B) Existential vacuum",
      "C) Cognitive restructuring",
      "D) Behavioral reinforcement"
    ],
    correct: 1,
    explanation: "Viktor Frankl described existential vacuum as the experience of meaninglessness, and existential therapy addresses the individual's search for meaning in life."
  },
  {
    domain: "Helping Relationships",
    question: "Which therapeutic approach is most associated with the concept of 'exceptions' to the problem?",
    options: [
      "A) Psychoanalytic therapy",
      "B) Solution-focused brief therapy",
      "C) Psychodynamic therapy",
      "D) Reality therapy"
    ],
    correct: 1,
    explanation: "Solution-focused brief therapy (de Shazer) emphasizes identifying times when the problem doesn't occur (exceptions) and building on client strengths and resources."
  },
  {
    domain: "Helping Relationships",
    question: "In narrative therapy, what is 'externalization'?",
    options: [
      "A) The therapist's expression of countertransference",
      "B) Separating the person from the problem by treating the problem as external",
      "C) The client's avoidance of emotional material",
      "D) The process of creating behavioral change plans"
    ],
    correct: 1,
    explanation: "Michael White and David Epston developed externalization as a technique where the problem is viewed as separate from the person's identity, reducing shame and opening possibilities for change."
  },
  {
    domain: "Helping Relationships",
    question: "Which family systems theorist emphasized the concept of 'triangulation'?",
    options: [
      "A) Salvador Minuchin",
      "B) Jay Haley",
      "C) Murray Bowen",
      "D) Virginia Satir"
    ],
    correct: 2,
    explanation: "Murray Bowen developed family systems theory and identified triangulation as the process by which a third person becomes involved in a two-person conflict as a way to reduce anxiety."
  },
  {
    domain: "Helping Relationships",
    question: "In Salvador Minuchin's structural family therapy, what is meant by 'boundaries'?",
    options: [
      "A) Rules about emotional expression in the family",
      "B) Clear delineations of roles and relationships between family members",
      "C) Limits set by the therapist in sessions",
      "D) Emotional distance maintained between generations"
    ],
    correct: 1,
    explanation: "Structural family therapy focuses on creating clear, appropriate boundaries between subsystems (parent-child, spousal) to promote healthy family functioning."
  },
  {
    domain: "Helping Relationships",
    question: "Which of the following best describes William Glasser's Reality Therapy/Choice Theory?",
    options: [
      "A) Behavior is driven by unconscious needs and conflicts",
      "B) All behavior is a choice made to satisfy five basic needs",
      "C) Behavior results from irrational thinking patterns",
      "D) Behavior is shaped primarily by environmental contingencies"
    ],
    correct: 1,
    explanation: "Glasser's choice theory posits that people choose their behavior to satisfy basic needs (survival, love/belonging, power, freedom, and fun), making people responsible for their choices."
  },
  {
    domain: "Helping Relationships",
    question: "In Motivational Interviewing (Miller & Rollnick), what is the primary goal of the counselor?",
    options: [
      "A) Provide advice and expertise to direct client change",
      "B) Evoke and strengthen the client's intrinsic motivation for change",
      "C) Identify maladaptive thought patterns",
      "D) Explore unconscious conflicts related to ambivalence"
    ],
    correct: 1,
    explanation: "Motivational Interviewing seeks to elicit change talk and strengthen the client's own reasons and commitment for change, rather than imposing change externally."
  },
  {
    domain: "Helping Relationships",
    question: "Which counseling skill involves restating what the client has said in approximately the same number of words?",
    options: [
      "A) Reflection of feeling",
      "B) Paraphrasing",
      "C) Summarization",
      "D) Confrontation"
    ],
    correct: 1,
    explanation: "Paraphrasing is a core listening skill that reiterates the client's content in similar words and length, demonstrating understanding and encouraging further exploration."
  },
  {
    domain: "Helping Relationships",
    question: "What is the primary purpose of reflection of feeling in counseling?",
    options: [
      "A) To validate and clarify the emotions the client is experiencing",
      "B) To teach the client emotional regulation strategies",
      "C) To express the counselor's emotional response to the client",
      "D) To redirect the client away from emotional topics"
    ],
    correct: 0,
    explanation: "Reflection of feeling demonstrates empathy, validates the client's emotional experience, and helps clarify the emotional dimension of what the client is communicating."
  },
  {
    domain: "Helping Relationships",
    question: "In counseling, 'immediacy' refers to which of the following?",
    options: [
      "A) Responding quickly to the client's statement",
      "B) Addressing the here-and-now interaction between counselor and client",
      "C) Providing immediate problem-solving strategies",
      "D) Setting time limits on counseling sessions"
    ],
    correct: 1,
    explanation: "Immediacy is a skill that involves addressing what is happening in the present moment of the therapeutic relationship, fostering authenticity and deepening the alliance."
  },
  {
    domain: "Helping Relationships",
    question: "Which of the following best describes 'confrontation' as a counseling skill?",
    options: [
      "A) Aggressively challenging the client's perspective",
      "B) Respectfully pointing out discrepancies, incongruences, or contradictions",
      "C) Expressing disagreement with the client's values",
      "D) Refusing to continue working with the client"
    ],
    correct: 1,
    explanation: "Confrontation is a respectful skill used to highlight discrepancies between what clients say and do, or between stated values and behaviors, promoting self-awareness and growth."
  },
  {
    domain: "Helping Relationships",
    question: "What is the 'therapeutic alliance'?",
    options: [
      "A) The fee structure agreed upon in the initial session",
      "B) The collaborative relationship and trust between counselor and client",
      "C) A formal contract outlining confidentiality limits",
      "D) The counselor's professional credentials and licensing"
    ],
    correct: 1,
    explanation: "The therapeutic alliance is the collaborative working relationship built on mutual trust, respect, and agreement on goals, and is one of the strongest predictors of treatment outcome."
  },
  {
    domain: "Helping Relationships",
    question: "According to Prochaska and DiClemente's Stages of Change model, which stage involves contemplating change but not yet committed to action?",
    options: [
      "A) Precontemplation",
      "B) Contemplation",
      "C) Preparation",
      "D) Maintenance"
    ],
    correct: 1,
    explanation: "In the contemplation stage, individuals are aware of a problem and thinking about change but remain ambivalent, weighing pros and cons."
  },
  {
    domain: "Helping Relationships",
    question: "What is the primary focus of crisis intervention counseling?",
    options: [
      "A) Resolving long-standing psychological issues",
      "B) Restoring immediate stability and preventing further deterioration",
      "C) Developing insight into unconscious conflicts",
      "D) Implementing long-term behavioral modification plans"
    ],
    correct: 1,
    explanation: "Crisis intervention aims to provide immediate support and stabilization during acute distress, helping the person regain equilibrium and access resources."
  },
  {
    domain: "Helping Relationships",
    question: "In the consultation model, what role does the consultant typically assume?",
    options: [
      "A) Direct provider of counseling services to the client",
      "B) Expert advisor working collaboratively with the consultee to address concerns",
      "C) Supervisor monitoring the consultee's clinical work",
      "D) Administrator of organizational policy"
    ],
    correct: 1,
    explanation: "Consultation involves an expert providing professional guidance to a consultee about a specific problem or client, maintaining a collaborative relationship."
  },
  {
    domain: "Helping Relationships",
    question: "Which supervision model emphasizes the supervisor's role as an evaluator of clinical competence?",
    options: [
      "A) Administrative supervision",
      "B) Educational supervision",
      "C) Clinical supervision",
      "D) Peer supervision"
    ],
    correct: 0,
    explanation: "Administrative supervision focuses on evaluation, accountability, and adherence to organizational standards and ethical guidelines."
  },
  {
    domain: "Helping Relationships",
    question: "What is 'countertransference' in the therapeutic relationship?",
    options: [
      "A) The client's resistance to change",
      "B) The therapist's unconscious emotional reactions to the client",
      "C) The breaking of confidentiality",
      "D) The client's dependence on the therapist"
    ],
    correct: 1,
    explanation: "Countertransference refers to the therapist's own emotional reactions, personal issues, or unconscious conflicts that may be activated by the client or therapeutic process."
  },
  {
    domain: "Helping Relationships",
    question: "In addressing multicultural counseling, which of the following is most important for counselor competence?",
    options: [
      "A) Having personal friends from diverse backgrounds",
      "B) Awareness of own cultural identity, biases, and the limits of one's competence",
      "C) Knowing all cultural groups' characteristics",
      "D) Using the same interventions for all clients regardless of background"
    ],
    correct: 1,
    explanation: "Multicultural competence requires counselor self-awareness about cultural identity and biases, openness to learning, and recognition that cultural generalizations are insufficient."
  },
  {
    domain: "Helping Relationships",
    question: "Which of the following statements about cultural humility is most accurate?",
    options: [
      "A) It assumes the counselor has expert knowledge of all cultures",
      "B) It involves a commitment to self-critique and lifelong learning about cultural differences",
      "C) It requires the client to adapt to the counselor's cultural norms",
      "D) It eliminates the need for cultural awareness training"
    ],
    correct: 1,
    explanation: "Cultural humility emphasizes ongoing self-reflection, recognizing limitations, and positioning oneself as a learner in cross-cultural work rather than as an expert."
  },
  {
    domain: "Helping Relationships",
    question: "How does neuroscience inform modern counseling practice?",
    options: [
      "A) Neuroscience proves that talk therapy is ineffective",
      "B) Understanding brain development and neuroplasticity helps explain how experiences and relationships affect neural pathways",
      "C) Neuroimaging is required to diagnose all mental health conditions",
      "D) The brain's function is static and unchangeable in adulthood"
    ],
    correct: 1,
    explanation: "Neuroscience reveals how therapeutic relationships, repeated experiences, and interventions can lead to neural rewiring and healing through neuroplasticity."
  },
  {
    domain: "Helping Relationships",
    question: "Which brain structure is most associated with processing emotions and encoding emotional memories?",
    options: [
      "A) Prefrontal cortex",
      "B) Amygdala",
      "C) Hippocampus",
      "D) Cerebellum"
    ],
    correct: 1,
    explanation: "The amygdala plays a central role in emotional processing and encoding emotionally significant memories, which is relevant to understanding trauma and emotional reactivity."
  },
  {
    domain: "Helping Relationships",
    question: "What is the relationship between the therapeutic alliance and treatment outcomes?",
    options: [
      "A) The alliance has minimal impact; technique matters most",
      "B) The alliance is one of the strongest predictors of positive outcomes across different therapies",
      "C) The alliance is only important in person-centered therapy",
      "D) The alliance becomes less important as the client improves"
    ],
    correct: 1,
    explanation: "Research consistently demonstrates that the quality of the therapeutic relationship is one of the most robust predictors of successful outcomes, regardless of theoretical orientation."
  },
  {
    domain: "Helping Relationships",
    question: "In Rogers' theory, what does 'conditions of worth' mean?",
    options: [
      "A) Financial payment for therapy services",
      "B) Love and acceptance that is conditional on meeting others' standards",
      "C) The qualifications required to practice counseling",
      "D) Achievements that contribute to self-esteem"
    ],
    correct: 1,
    explanation: "Rogers believed that conditional regard from significant others creates conditions of worth, leading to incongruence between real self and ideal self."
  },
  {
    domain: "Helping Relationships",
    question: "Which cognitive distortion involves taking one negative event and assuming it will always occur?",
    options: [
      "A) Personalization",
      "B) Overgeneralization",
      "C) Catastrophizing",
      "D) Mental filtering"
    ],
    correct: 1,
    explanation: "Overgeneralization is a thinking error where one negative experience is seen as a never-ending pattern, leading to global negative predictions."
  },
  {
    domain: "Helping Relationships",
    question: "What is the primary goal of behavior activation in CBT?",
    options: [
      "A) To eliminate all negative thoughts",
      "B) To engage in valued activities to improve mood and counter depression",
      "C) To develop strategies for avoiding difficult situations",
      "D) To increase motivation through external rewards"
    ],
    correct: 1,
    explanation: "Behavior activation is used in CBT to help clients re-engage in meaningful activities, which can improve mood and break cycles of avoidance and inactivity."
  },
  {
    domain: "Helping Relationships",
    question: "In Gestalt therapy, what is meant by 'unfinished business'?",
    options: [
      "A) Work-related tasks that need completion",
      "B) Unexpressed emotions or unresolved relationships from the past affecting present functioning",
      "C) Financial obligations",
      "D) Goals that have not yet been achieved"
    ],
    correct: 1,
    explanation: "In Gestalt therapy, unfinished business refers to past events or relationships with unexpressed emotions that continue to affect present experience and awareness."
  },
  {
    domain: "Helping Relationships",
    question: "What is the primary purpose of the 'empty chair' technique in Gestalt therapy?",
    options: [
      "A) To encourage the client to leave the session",
      "B) To allow the client to engage in dialogue with an imagined person or part of self",
      "C) To reduce the cost of therapy",
      "D) To prevent the client from making eye contact"
    ],
    correct: 1,
    explanation: "The empty chair technique allows clients to project feelings or dialogue onto an imagined other (or part of themselves), promoting awareness and expression."
  },
  {
    domain: "Helping Relationships",
    question: "Which concept from Viktor Frankl's Logotherapy is particularly relevant to existential counseling?",
    options: [
      "A) Happiness is the primary goal of life",
      "B) Meaning can be found even in suffering and difficult circumstances",
      "C) The past determines the future",
      "D) External circumstances control our emotional responses"
    ],
    correct: 1,
    explanation: "Frankl's core message is that people can find meaning through their responses to life's circumstances, particularly in dealing with suffering and hardship."
  },
  {
    domain: "Helping Relationships",
    question: "In existential therapy as described by Irvin Yalom, what is the role of confronting one's mortality?",
    options: [
      "A) It is pathological and should be avoided",
      "B) It can prompt clients to live more authentically and purposefully",
      "C) It is only relevant for clients with terminal illness",
      "D) It leads to increased anxiety without benefit"
    ],
    correct: 1,
    explanation: "Yalom views awareness of mortality as potentially therapeutic, as it can motivate clients to examine values, reduce trivial concerns, and live more meaningfully."
  },
  {
    domain: "Helping Relationships",
    question: "What is 'de-centering' as a client skill taught in CBT?",
    options: [
      "A) Focusing more intensely on one's thoughts",
      "B) Viewing thoughts and feelings as mental events rather than absolute truths",
      "C) Moving away from the counselor's office",
      "D) Becoming self-centered and resistant to feedback"
    ],
    correct: 1,
    explanation: "De-centering helps clients observe their thoughts and emotions from a distance, recognizing them as transient mental phenomena rather than facts or reality."
  },
  {
    domain: "Helping Relationships",
    question: "Which family systems concept refers to the degree of emotional dependence or closeness among family members?",
    options: [
      "A) Differentiation of self",
      "B) Enmeshment",
      "C) Emotional cutoff",
      "D) Fusion"
    ],
    correct: 1,
    explanation: "Enmeshment occurs when family members have blurred boundaries with poor differentiation of self, leading to heightened emotional reactivity and difficulty with autonomy."
  },
  {
    domain: "Helping Relationships",
    question: "In strategic family therapy (Haley), what is the purpose of prescribing the symptom?",
    options: [
      "A) To cure the problem permanently",
      "B) To increase the symptom until the client's resistance breaks down",
      "C) To help the client gain control over the symptom or realize it is changeable",
      "D) To prove the therapist's expertise"
    ],
    correct: 2,
    explanation: "Symptom prescription is a paradoxical intervention where the therapist prescribes the problematic behavior, often increasing the client's awareness and control over it."
  },
  {
    domain: "Helping Relationships",
    question: "What is Virginia Satir's concept of 'congruence' in family systems?",
    options: [
      "A) Family members having identical opinions",
      "B) Alignment of words, tone, and body language in communication",
      "C) The therapist's personal values matching the client's",
      "D) Consistent punishment for misbehavior"
    ],
    correct: 1,
    explanation: "Satir emphasized congruent communication where the speaker's words, tone, and body language are aligned, promoting genuine and authentic family interactions."
  },
  {
    domain: "Helping Relationships",
    question: "Which of the following best describes 'positive reframing' in narrative therapy?",
    options: [
      "A) Ignoring negative events and focusing only on positive ones",
      "B) Viewing a problem from an alternative perspective that emphasizes strengths and resources",
      "C) Teaching the client to always think positively",
      "D) Avoiding discussion of pain or difficulties"
    ],
    correct: 1,
    explanation: "Positive reframing shifts perspective to highlight existing strengths, resources, and possibilities, without denying difficulties—supporting solution-focused work."
  },
  {
    domain: "Helping Relationships",
    question: "In solution-focused brief therapy, what is a 'miracle question'?",
    options: [
      "A) A question about religious beliefs",
      "B) A question asking clients to imagine waking up and the problem being solved, used to identify goals and resources",
      "C) A question about unlikely life changes",
      "D) A therapeutic technique that promises instant cure"
    ],
    correct: 1,
    explanation: "The miracle question is a technique that helps clients envision a preferred future without the problem, revealing valued outcomes and hidden resources."
  },
  {
    domain: "Helping Relationships",
    question: "What is the primary advantage of brief therapy approaches in modern counseling?",
    options: [
      "A) They work equally well for all clients and problems",
      "B) They are more efficient and practical for managed care settings while maintaining effectiveness",
      "C) They eliminate the need for therapeutic alliance",
      "D) They are based solely on empirical research"
    ],
    correct: 1,
    explanation: "Brief therapy approaches are valuable for addressing specific problems within a limited timeframe, fitting practical constraints while demonstrating good outcomes."
  },
  {
    domain: "Helping Relationships",
    question: "Which of the following is a key principle of Adler's concept of 'lifestyle'?",
    options: [
      "A) It is determined solely by childhood experiences",
      "B) It represents a unique pattern of beliefs, goals, and behaviors that guide an individual's approach to life",
      "C) It is synonymous with socioeconomic status",
      "D) It cannot be changed in adulthood"
    ],
    correct: 1,
    explanation: "In Adlerian theory, lifestyle is a habitual way of thinking and behaving that develops early but can be modified through awareness and choice."
  },
  {
    domain: "Helping Relationships",
    question: "What does Adler mean by 'inferiority complex'?",
    options: [
      "A) A sign of mental illness requiring diagnosis",
      "B) An exaggerated feeling of inadequacy that interferes with functioning and goal pursuit",
      "C) A normal developmental stage",
      "D) Inferior intelligence"
    ],
    correct: 1,
    explanation: "An inferiority complex in Adlerian theory is when feelings of inferiority become excessive and prevent positive striving or movement toward goals."
  },
  {
    domain: "Helping Relationships",
    question: "In psychoanalytic theory, what is 'projection'?",
    options: [
      "A) Planning for the future",
      "B) Attributing one's own unacceptable thoughts or feelings to another person",
      "C) Creating a mental image",
      "D) Expressing disagreement"
    ],
    correct: 1,
    explanation: "Projection is a defense mechanism where internal conflicts or unacceptable impulses are attributed to others, protecting the self from awareness."
  },
  {
    domain: "Helping Relationships",
    question: "What is the primary goal of exposure therapy in treating anxiety disorders?",
    options: [
      "A) To avoid triggers that cause anxiety",
      "B) To gradually confront feared situations while managing anxiety, leading to reduced fear responses",
      "C) To increase anxiety to develop resilience",
      "D) To eliminate all feelings of anxiety"
    ],
    correct: 1,
    explanation: "Exposure therapy uses repeated, prolonged contact with feared situations or stimuli in a safe context to reduce anxiety and break avoidance patterns."
  },
  {
    domain: "Helping Relationships",
    question: "Which therapeutic technique involves gradually reducing the intensity or frequency of a habit or symptom?",
    options: [
      "A) Flooding",
      "B) Systematic desensitization",
      "C) Aversion therapy",
      "D) Habituation training"
    ],
    correct: 1,
    explanation: "Systematic desensitization uses a graded approach to confront anxiety-provoking situations, pairing each step with relaxation to condition a new response."
  },
  {
    domain: "Helping Relationships",
    question: "In motivational interviewing, what is 'change talk'?",
    options: [
      "A) The counselor's persuasive statements about the need for change",
      "B) Client statements expressing motivation, readiness, or commitment to change",
      "C) Discussion about past failed attempts at change",
      "D) The therapist directly instructing the client to change"
    ],
    correct: 1,
    explanation: "Change talk refers to client statements indicating desire, ability, reasons, or commitment to change; MI counselors elicit and reinforce this language."
  },
  {
    domain: "Helping Relationships",
    question: "What is 'decisional balance' in motivational interviewing?",
    options: [
      "A) The counselor deciding what is best for the client",
      "B) Exploring the pros and cons of changing and not changing to resolve ambivalence",
      "C) The client making a final decision about treatment",
      "D) Financial considerations in therapy"
    ],
    correct: 1,
    explanation: "Decisional balance involves exploring the benefits and costs of both change and the status quo, helping clients work through ambivalence."
  },
  {
    domain: "Helping Relationships",
    question: "Which counseling skill involves briefly repeating the client's last words to encourage further exploration?",
    options: [
      "A) Paraphrasing",
      "B) Minimal encouragers",
      "C) Open questions",
      "D) Summarization"
    ],
    correct: 1,
    explanation: "Minimal encouragers (like 'uh-huh,' 'go on,' or repeating key words) are brief responses that encourage clients to continue talking and elaborating."
  },
  {
    domain: "Helping Relationships",
    question: "In counseling, what is an 'open question'?",
    options: [
      "A) A question with yes/no answers",
      "B) A question that invites detailed, exploratory responses",
      "C) A question about personal beliefs",
      "D) A question the counselor doesn't know the answer to"
    ],
    correct: 1,
    explanation: "Open questions encourage elaboration and allow clients to respond in their own way, facilitating deeper exploration compared to closed questions."
  },
  {
    domain: "Helping Relationships",
    question: "What is the purpose of summarization in counseling?",
    options: [
      "A) To save time in sessions",
      "B) To demonstrate understanding, check accuracy, and provide direction or closure",
      "C) To avoid discussing difficult topics",
      "D) To provide advice to the client"
    ],
    correct: 1,
    explanation: "Summarization pulls together key themes or statements, checks for counselor understanding, and can mark transitions or session endings."
  },
  {
    domain: "Helping Relationships",
    question: "Which of the following best describes 'active listening'?",
    options: [
      "A) Waiting for the client to finish talking before responding",
      "B) Full engagement with the client through verbal and nonverbal attention, reflection, and validation",
      "C) Giving advice while the client speaks",
      "D) Listening while formulating the next question"
    ],
    correct: 1,
    explanation: "Active listening involves sustained attention, appropriate nonverbals, reflection of content and feeling, and genuine interest in the client's experience."
  },
  {
    domain: "Helping Relationships",
    question: "What is 'empathy' as defined in counseling practice?",
    options: [
      "A) Feeling pity for the client's situation",
      "B) Sharing the same experiences as the client",
      "C) Understanding and communicating understanding of the client's perspective and emotional experience",
      "D) Agreeing with all of the client's viewpoints"
    ],
    correct: 2,
    explanation: "Empathy in counseling means understanding the client's world from their perspective and communicating that understanding, without necessarily having had similar experiences."
  },
  {
    domain: "Helping Relationships",
    question: "In the precontemplation stage of change, how might a counselor best intervene?",
    options: [
      "A) Push the client toward action immediately",
      "B) Accept that change is unlikely and terminate counseling",
      "C) Build awareness of the problem without pushing for change, supporting intrinsic motivation",
      "D) Use confrontation to highlight the severity of the problem"
    ],
    correct: 2,
    explanation: "During precontemplation, the counselor's role is to gently increase awareness and allow the client to develop their own motivation without coercion."
  },
  {
    domain: "Helping Relationships",
    question: "What is the primary focus during the preparation stage of change?",
    options: [
      "A) Building awareness of the problem",
      "B) Planning and developing specific strategies for change",
      "C) Maintaining changes already made",
      "D) Returning to previous behavior patterns"
    ],
    correct: 1,
    explanation: "In the preparation stage, clients are ready to change soon and need help developing concrete plans and selecting strategies for implementation."
  },
  {
    domain: "Helping Relationships",
    question: "According to the transtheoretical model, what is the primary goal of the action stage?",
    options: [
      "A) Becoming aware of the need for change",
      "B) Implementing concrete changes and new behaviors",
      "C) Reflecting on past behavior",
      "D) Preparing for change"
    ],
    correct: 1,
    explanation: "In the action stage, the client implements new behaviors and strategies while the counselor provides support, problem-solving, and feedback."
  },
  {
    domain: "Helping Relationships",
    question: "What is 'relapse' in the context of the stages of change model?",
    options: [
      "A) The client's lack of effort",
      "B) A return to previous behavior patterns after making changes",
      "C) Permanent failure to change",
      "D) The counselor's inadequacy"
    ],
    correct: 1,
    explanation: "Relapse involves temporarily or permanently returning to previous behaviors; the model views this as a normal part of the change process rather than total failure."
  },
  {
    domain: "Helping Relationships",
    question: "Which of the following is a primary principle in crisis intervention?",
    options: [
      "A) Long-term personality change is the main goal",
      "B) Immediate safety assessment and stabilization are priorities",
      "C) Crisis is an opportunity for therapy",
      "D) The counselor should remain neutral and distant"
    ],
    correct: 1,
    explanation: "Crisis intervention prioritizes immediate safety, risk assessment, stabilization, and connecting the person with resources to restore equilibrium."
  },
  {
    domain: "Helping Relationships",
    question: "In crisis intervention, what is the purpose of providing psychoeducation?",
    options: [
      "A) To make the counselor appear knowledgeable",
      "B) To normalize the crisis reaction and teach coping strategies",
      "C) To give the client homework assignments",
      "D) To avoid discussing the client's feelings"
    ],
    correct: 1,
    explanation: "Psychoeducation in crisis work helps normalize responses, reduces shame, and teaches practical coping strategies that clients can use immediately."
  },
  {
    domain: "Helping Relationships",
    question: "What is a 'no-suicide contract' in crisis counseling?",
    options: [
      "A) A guarantee that the client will not attempt suicide",
      "B) A collaborative agreement where the client commits to seeking help before harming themselves",
      "C) A legal document that protects the counselor",
      "D) A contract that removes the counselor's responsibility for client safety"
    ],
    correct: 1,
    explanation: "A no-suicide contract is an agreement between counselor and client that the client will contact the counselor or emergency services if suicidal urges arise."
  },
  {
    domain: "Helping Relationships",
    question: "In the Caplan consultation model, what is the primary goal of consultation?",
    options: [
      "A) To provide direct services to the client",
      "B) To improve the consultee's ability to work with current and future clients",
      "C) To evaluate the consultee's performance",
      "D) To enforce organizational policies"
    ],
    correct: 1,
    explanation: "Caplan's model emphasizes helping the consultee develop skills and insights that transfer to their work with multiple clients, not just addressing one case."
  },
  {
    domain: "Helping Relationships",
    question: "What is 'triadic consultation'?",
    options: [
      "A) Three therapists working with one client",
      "B) A three-way meeting between therapist, client, and family member",
      "C) Consultation involving a consultant, consultee, and client-system",
      "D) Three separate consultation sessions"
    ],
    correct: 2,
    explanation: "In triadic consultation, the consultant works with the consultee (e.g., teacher, manager) to address issues with a client-system (e.g., student, employee)."
  },
  {
    domain: "Helping Relationships",
    question: "Which supervision approach emphasizes the supervisee's self-development and autonomy?",
    options: [
      "A) Directive supervision",
      "B) Developmental/collaborative supervision",
      "C) Evaluation-focused supervision",
      "D) Punitive supervision"
    ],
    correct: 1,
    explanation: "Developmental supervision encourages growth through guided exploration, collaborative reflection, and increasing independence in clinical decision-making."
  },
  {
    domain: "Helping Relationships",
    question: "What is 'live supervision' in clinical training?",
    options: [
      "A) The supervisor conducting therapy with the client",
      "B) The supervisor observing and providing real-time feedback during a session",
      "C) The supervisee recording sessions for later review",
      "D) The supervisor evaluating the supervisee annually"
    ],
    correct: 1,
    explanation: "In live supervision, the supervisor observes therapy in real-time (behind glass, via video) and provides immediate feedback or guidance to the supervisee."
  },
  {
    domain: "Helping Relationships",
    question: "What is 'vicarious trauma' or 'compassion fatigue'?",
    options: [
      "A) The client's traumatic memories",
      "B) The counselor's emotional exhaustion from empathically engaging with clients' trauma stories",
      "C) A type of anxiety disorder",
      "D) The client's resistance to treatment"
    ],
    correct: 1,
    explanation: "Vicarious trauma refers to the cumulative effect of exposure to others' trauma, potentially causing emotional exhaustion, decreased empathy, and secondary stress in the helper."
  },
  {
    domain: "Helping Relationships",
    question: "How should a counselor address an ethical violation committed by a colleague?",
    options: [
      "A) Ignore it to protect the profession's reputation",
      "B) Gossip about it to other colleagues",
      "C) Report it through proper channels to the appropriate licensing board or ethics committee",
      "D) Confront the colleague privately and take no further action"
    ],
    correct: 2,
    explanation: "Ethical codes require counselors to address violations through appropriate professional channels, protecting clients and upholding professional standards."
  },
  {
    domain: "Helping Relationships",
    question: "What is the primary ethical concern when a counselor experiences attraction to a client?",
    options: [
      "A) It is shameful and should never be discussed",
      "B) It should be acted upon if the client consents",
      "C) It must be managed ethically through awareness, supervision, and appropriate boundaries",
      "D) It is grounds for immediate license revocation"
    ],
    correct: 2,
    explanation: "Experiencing attraction is a human response; ethical counseling requires awareness, professional boundaries, consultation, and potentially referral if managing the response is difficult."
  },
  {
    domain: "Helping Relationships",
    question: "In working with culturally diverse clients, what does 'etic' perspective mean?",
    options: [
      "A) The client's internal experience and meaning-making",
      "B) The outsider's perspective or generalizations about a culture",
      "C) Specific cultural practices unique to one person",
      "D) Illegal activity within a culture"
    ],
    correct: 1,
    explanation: "The etic perspective refers to external observation and analysis of culture, in contrast to the emic perspective which is the insider's view."
  },
  {
    domain: "Helping Relationships",
    question: "What is 'cultural encapsulation' in counseling?",
    options: [
      "A) Putting cultural beliefs into therapy",
      "B) Limiting one's worldview to one's own cultural perspective, reducing cultural awareness",
      "C) Supporting all cultural practices without question",
      "D) Learning about multiple cultures"
    ],
    correct: 1,
    explanation: "Cultural encapsulation occurs when a counselor is unable to step outside their own cultural lens, limiting their ability to understand clients from different backgrounds."
  },
  {
    domain: "Helping Relationships",
    question: "How does understanding acculturation impact counseling with immigrant clients?",
    options: [
      "A) It is irrelevant to the counseling process",
      "B) It helps explain differences in values, stress, and adjustment that may relate to presenting concerns",
      "C) It requires the client to assimilate completely",
      "D) It eliminates the need for other cultural considerations"
    ],
    correct: 1,
    explanation: "Acculturation—how individuals integrate into a new culture—significantly affects stress, identity, and mental health; understanding it is essential for effective counseling."
  },
  {
    domain: "Helping Relationships",
    question: "What does 'intersectionality' refer to in multicultural counseling?",
    options: [
      "A) The crossing of streets in a city",
      "B) Multiple, overlapping aspects of identity (race, gender, sexuality, ability, class) that interact to shape experience",
      "C) Conflicts between two cultures",
      "D) A marketing strategy"
    ],
    correct: 1,
    explanation: "Intersectionality acknowledges that clients have multiple identities that interact; a client's experience cannot be understood by considering only one identity dimension."
  },
  {
    domain: "Helping Relationships",
    question: "In the neurobiology of trauma, what role does the amygdala play?",
    options: [
      "A) Stores factual memories of events",
      "B) Controls logical reasoning and executive function",
      "C) Processes emotional significance and triggers the fight-flight-freeze response to threats",
      "D) Regulates breathing and heart rate"
    ],
    correct: 2,
    explanation: "The amygdala processes emotional salience and threat detection, triggering physiological stress responses that can be activated by trauma reminders."
  },
  {
    domain: "Helping Relationships",
    question: "What is neuroplasticity and why is it important for counseling?",
    options: [
      "A) The brain is rigid and unchangeable after childhood",
      "B) The ability of the brain to form new neural connections and pathways throughout life, supporting the potential for change in counseling",
      "C) The brain is completely flexible with no biological constraints",
      "D) It only applies to children"
    ],
    correct: 1,
    explanation: "Neuroplasticity demonstrates that repeated experiences, learning, and therapeutic interventions can literally reshape neural architecture, supporting therapeutic optimism."
  },
  {
    domain: "Helping Relationships",
    question: "How does the polyvagal theory inform understanding of client responses in counseling?",
    options: [
      "A) It explains why some clients have multiple personalities",
      "B) It describes how the vagus nerve regulates stress response and how clients may shift between states of mobilization, social engagement, or shutdown",
      "C) It is not relevant to counseling",
      "D) It applies only to clients with neurological disorders"
    ],
    correct: 1,
    explanation: "Polyvagal theory (Porges) explains how the nervous system shifts between states; understanding this helps counselors recognize defensive responses and support nervous system regulation."
  },
  {
    domain: "Helping Relationships",
    question: "What is 'window of tolerance' in trauma-informed counseling?",
    options: [
      "A) The client's ability to make decisions",
      "B) The optimal zone of arousal where the nervous system can process information and respond flexibly",
      "C) The therapist's work hours",
      "D) How long a session lasts"
    ],
    correct: 1,
    explanation: "The window of tolerance describes the zone of arousal between hyperarousal and hypoarousal where clients can engage in learning and healing."
  },
  {
    domain: "Helping Relationships",
    question: "In trauma therapy, what is the goal of 'grounding' or 'orienting' techniques?",
    options: [
      "A) To teach the client discipline",
      "B) To bring awareness to the present moment and activate the nervous system's window of tolerance",
      "C) To make the client forget their trauma",
      "D) To force emotional expression"
    ],
    correct: 1,
    explanation: "Grounding techniques help traumatized clients return to present awareness and regulate their nervous system when triggered by trauma memories or reminders."
  },
  {
    domain: "Helping Relationships",
    question: "What is the 'corrective emotional experience' in psychodynamic therapy?",
    options: [
      "A) The therapist correcting the client's behavior",
      "B) A new relational experience with the therapist that differs from past relationship patterns, allowing for healing",
      "C) Teaching the client the 'correct' way to think",
      "D) Punishment for maladaptive behavior"
    ],
    correct: 1,
    explanation: "A corrective emotional experience occurs when the therapeutic relationship provides a different, healthier relational pattern than the client experienced previously."
  },
  {
    domain: "Helping Relationships",
    question: "In psychodynamic therapy, what is 'working through'?",
    options: [
      "A) Completing an exercise routine",
      "B) The repeated exploration and processing of unconscious conflicts across different contexts and memories",
      "C) Ignoring emotional issues",
      "D) Making one interpretation and resolving the issue"
    ],
    correct: 1,
    explanation: "Working through involves revisiting and integrating insights about unconscious conflicts in multiple ways, applying them to various life situations."
  },
  {
    domain: "Helping Relationships",
    question: "What is the primary difference between insight-oriented and action-oriented therapeutic approaches?",
    options: [
      "A) Insight approaches are more effective than action approaches",
      "B) Insight approaches emphasize understanding causes; action approaches emphasize behavioral change and behavioral momentum",
      "C) Action approaches avoid discussing feelings",
      "D) Insight approaches only work for educated clients"
    ],
    correct: 1,
    explanation: "Insight approaches (psychodynamic, humanistic) prioritize awareness and understanding, while action approaches (behavioral, cognitive-behavioral) emphasize doing and behavioral change."
  },
  {
    domain: "Helping Relationships",
    question: "What is the significance of 'rupture and repair' in the therapeutic relationship?",
    options: [
      "A) It indicates the counselor has failed",
      "B) Moments of disconnection followed by reconnection provide opportunities for deepening trust and understanding",
      "C) It should be avoided at all costs",
      "D) It means the client should find a new therapist"
    ],
    correct: 1,
    explanation: "Ruptures (disconnections) are inevitable; addressing them directly and repairing the relationship can actually strengthen the alliance and model healthy conflict resolution."
  },
  {
    domain: "Helping Relationships",
    question: "In attachment theory, what does 'earned secure attachment' refer to?",
    options: [
      "A) A financial investment strategy",
      "B) Developing secure attachment in adulthood despite insecure early relationships, often through therapeutic relationships",
      "C) A parenting technique",
      "D) Returning to one's childhood caregiver"
    ],
    correct: 1,
    explanation: "Earned secure attachment describes how individuals with insecure early attachment can develop security through reflective relationships and processing of attachment history."
  },
  {
    domain: "Helping Relationships",
    question: "What is 'mentalization' in contemporary psychodynamic therapy?",
    options: [
      "A) Avoiding mental health altogether",
      "B) The capacity to reflect on one's own and others' mental states, intentions, and emotions",
      "C) A type of meditation",
      "D) Punishment of others"
    ],
    correct: 1,
    explanation: "Mentalization refers to the ability to understand oneself and others in terms of mental states; therapy enhances this capacity, improving relationships and emotional regulation."
  },
  {
    domain: "Helping Relationships",
    question: "In schema therapy, what is a 'schema'?",
    options: [
      "A) A schedule or calendar",
      "B) A deeply held, generalized belief about oneself, others, or the world formed in childhood",
      "C) A diagram of relationships",
      "D) A plan for the future"
    ],
    correct: 1,
    explanation: "Schema therapy (Young) addresses maladaptive schemas—core beliefs and patterns—developed early and maintained through various coping modes."
  },
  {
    domain: "Helping Relationships",
    question: "What is 'distress tolerance' and why is it important in counseling?",
    options: [
      "A) Ignoring feelings of discomfort",
      "B) The ability to endure emotional or psychological distress without engaging in harmful coping, essential for therapeutic progress and life satisfaction",
      "C) Pretending everything is fine",
      "D) Increasing pain to build character"
    ],
    correct: 1,
    explanation: "Distress tolerance is the capacity to bear uncomfortable feelings and sit with distress without resorting to harmful behaviors; it is a key skill taught in DBT and other therapies."
  },
  {
    domain: "Helping Relationships",
    question: "In Dialectical Behavior Therapy (DBT), what does 'dialectics' refer to?",
    options: [
      "A) A way of speaking",
      "B) The balance and synthesis of acceptance and change strategies",
      "C) A type of dialect",
      "D) Debate"
    ],
    correct: 1,
    explanation: "DBT integrates acceptance (validation, mindfulness) and change (behavioral, cognitive) in a dialectical synthesis appropriate for clients with emotion dysregulation."
  },
  {
    domain: "Helping Relationships",
    question: "What are 'core beliefs' in cognitive therapy?",
    options: [
      "A) Opinions about politics or religion",
      "B) Fundamental, absolute beliefs about oneself, others, and the world that underlie automatic thoughts",
      "C) Beliefs that cannot be changed",
      "D) The therapist's personal values"
    ],
    correct: 1,
    explanation: "Core beliefs are deeply ingrained, often unconscious beliefs (e.g., 'I am unworthy') that generate automatic thoughts and maintain psychological distress."
  },
  {
    domain: "Helping Relationships",
    question: "What is 'behavioral activation' most effective for treating?",
    options: [
      "A) Anxiety disorders exclusively",
      "B) Depression, particularly when inactivity and avoidance maintain the depressive cycle",
      "C) Only severe mental illness",
      "D) Personality disorders"
    ],
    correct: 1,
    explanation: "Behavioral activation is particularly effective for depression as it interrupts the withdrawal and inactivity that maintain depressed mood."
  },
  {
    domain: "Helping Relationships",
    question: "In exposure-based therapy, what is 'habituation'?",
    options: [
      "A) Becoming used to a behavior",
      "B) The gradual reduction in anxiety response with repeated, prolonged exposure to a feared stimulus",
      "C) The client's resistance to change",
      "D) Habit formation"
    ],
    correct: 1,
    explanation: "Habituation occurs as the nervous system adapts to the feared stimulus through repeated exposure without avoidance, leading to decreased anxiety."
  },
  {
    domain: "Helping Relationships",
    question: "What is 'acceptance and commitment therapy' (ACT) based on?",
    options: [
      "A) Eliminating all negative thoughts",
      "B) Accepting internal experiences while committing to valued action aligned with personal values",
      "C) Accepting mental illness as unchangeable",
      "D) Committing to what others value"
    ],
    correct: 1,
    explanation: "ACT integrates acceptance of internal experiences, cognitive defusion, and values-driven committed action, reducing suffering through psychological flexibility."
  },
  {
    domain: "Helping Relationships",
    question: "What is 'cognitive defusion' in ACT?",
    options: [
      "A) Disagreeing with one's own thoughts",
      "B) Creating distance from thoughts by changing one's relationship to them rather than changing their content",
      "C) Thinking logically",
      "D) Confusing thoughts"
    ],
    correct: 1,
    explanation: "Cognitive defusion involves techniques (like noting thoughts, singing them, repeating words) that separate the person from unhelpful thoughts without fighting them."
  },
  {
    domain: "Helping Relationships",
    question: "In Acceptance and Commitment Therapy, what is 'values clarification'?",
    options: [
      "A) Understanding societal values",
      "B) Identifying personal values that provide meaning and direction for committed action",
      "C) Judging the client's values",
      "D) Imposing therapist values on the client"
    ],
    correct: 1,
    explanation: "Values clarification helps clients identify what deeply matters to them across life domains, directing therapeutic work toward meaningful living."
  },
  {
    domain: "Helping Relationships",
    question: "What is 'mindfulness' in the context of psychotherapy?",
    options: [
      "A) Relaxation or meditation exclusively",
      "B) Non-judgmental, present-moment awareness of thoughts, feelings, and sensations",
      "C) Positive thinking",
      "D) Clearing the mind of all thoughts"
    ],
    correct: 1,
    explanation: "Mindfulness in therapy involves observing internal and external experiences with openness and curiosity, without judgment or reactivity."
  },
  {
    domain: "Helping Relationships",
    question: "How does relational depth in counseling enhance therapeutic outcomes?",
    options: [
      "A) It is not relevant to outcomes",
      "B) Deep, genuine contact with the client fosters trust, safety, and the conditions for healing and change",
      "C) Only clients with relational issues benefit from depth",
      "D) It increases the risk of dual relationships"
    ],
    correct: 1,
    explanation: "Relational depth—authentic, mutual engagement between counselor and client—is therapeutic in itself and supports all aspects of the change process."
  },
  {
    domain: "Helping Relationships",
    question: "What is the 'social baseline theory' and its counseling implications?",
    options: [
      "A) Clients should interact with many people",
      "B) The nervous system is regulated through safe relationships, implying that therapeutic relationships have regulatory and healing effects",
      "C) Counseling is only for socially anxious people",
      "D) Social media is necessary for mental health"
    ],
    correct: 1,
    explanation: "Social baseline theory suggests that the nervous system naturally synchronizes with safe others; the therapeutic relationship provides this regulatory function."
  },
  {
    domain: "Helping Relationships",
    question: "In solution-focused therapy, what is 'scaling'?",
    options: [
      "A) Climbing toward solutions",
      "B) A technique where clients rate their progress or perception on a scale (e.g., 1-10) to track change and identify resources",
      "C) Increasing problem severity",
      "D) Avoiding real change"
    ],
    correct: 1,
    explanation: "Scaling questions help clients externalize and measure subjective experience, identify what's helped them move higher on the scale, and set achievable goals."
  },
  {
    domain: "Helping Relationships",
    question: "What is the 'presupposition' technique in solution-focused therapy?",
    options: [
      "A) Assuming the client will fail",
      "B) Questions that assume change is occurring or will occur, building hope and expectancy",
      "C) Making judgments about the client",
      "D) Predictions of failure"
    ],
    correct: 1,
    explanation: "Presupposition questions implicitly assume change has or will happen (e.g., 'When you've solved this...'), activating the client's agency and resourcefulness."
  },
  {
    domain: "Helping Relationships",
    question: "In narrative therapy, what is the 'preferred outcome' or 'preferred identity'?",
    options: [
      "A) What the therapist wants for the client",
      "B) The client's vision of themselves and their life free from problem-saturated narratives",
      "C) An unrealistic fantasy",
      "D) The therapist's recommended path"
    ],
    correct: 1,
    explanation: "The preferred outcome reflects the client's values, strengths, and desired identity, providing direction for therapy and co-authoring alternative, empowering stories."
  },
  {
    domain: "Helping Relationships",
    question: "What is 'unique outcomes' in narrative therapy?",
    options: [
      "A) Individual therapy sessions",
      "B) Moments when the problem was absent or less powerful, used to build alternative narratives",
      "C) The therapist's unique approach",
      "D) Rare diagnoses"
    ],
    correct: 1,
    explanation: "Unique outcomes are exceptions to the problem story; exploring them reveals client competency and provides building blocks for counter-narratives."
  },
  {
    domain: "Helping Relationships",
    question: "In family therapy, what is 'differentiation of self'?",
    options: [
      "A) Being different from one's family",
      "B) The ability to maintain a sense of self while remaining emotionally connected to family",
      "C) Family members having different roles",
      "D) Separating from the family entirely"
    ],
    correct: 1,
    explanation: "Differentiation (Bowen) refers to the balance between autonomy and connection—maintaining selfhood while staying emotionally engaged with family."
  },
  {
    domain: "Helping Relationships",
    question: "What is the purpose of 'coaching' in experiential family therapy?",
    options: [
      "A) Training family members in sports",
      "B) Guiding clients toward enacting new patterns and interactions within sessions",
      "C) Directing all family decisions",
      "D) Criticizing family members"
    ],
    correct: 1,
    explanation: "Coaching involves gently guiding family members to try new interactions in session, supporting change through enactment and real-time feedback."
  },
  {
    domain: "Helping Relationships",
    question: "In Satir's process model, what is 'incongruence'?",
    options: [
      "A) Being rude or disrespectful",
      "B) Misalignment between inner experience and outward communication or behavior",
      "C) Disagreement with others",
      "D) Breaking a contract"
    ],
    correct: 1,
    explanation: "Incongruence in Satir's model refers to discrepancies between what someone feels/thinks and what they communicate, contributing to relational problems."
  },
  {
    domain: "Helping Relationships",
    question: "What are the three main 'coping styles' or 'survival stances' in Satir's model?",
    options: [
      "A) Fight, flight, freeze",
      "B) Blaming, placating, computing, withdrawing (and later leveling/congruence)",
      "C) Aggressive, passive, assertive",
      "D) Dominant, submissive, neutral"
    ],
    correct: 1,
    explanation: "Satir identified protective stances people adopt in families; therapy aims toward congruent, flexible communication that honors all perspectives."
  },
  {
    domain: "Helping Relationships",
    question: "In strategic family therapy, what is the purpose of 'reframing'?",
    options: [
      "A) Installing new window frames",
      "B) Offering an alternative perspective on the problem that opens new solutions",
      "C) Denying the problem's seriousness",
      "D) Avoiding the real issues"
    ],
    correct: 1,
    explanation: "Reframing transforms the meaning or interpretation of behavior or situations, often enabling the family to respond differently and generating solutions."
  },
  {
    domain: "Helping Relationships",
    question: "What is 'joining' in family therapy?",
    options: [
      "A) Adding new family members",
      "B) The therapist's process of building rapport and understanding the family system from within",
      "C) Replacing the family's dynamics",
      "D) Forcing agreement among family members"
    ],
    correct: 1,
    explanation: "Joining is the therapist's empathic entry into the family system, establishing trust and alliance so that influence and change become possible."
  },
  {
    domain: "Helping Relationships",
    question: "In Minuchin's structural family therapy, what is 'enactment'?",
    options: [
      "A) Acting out a play",
      "B) Asking family members to interact in the session to reveal and modify patterns",
      "C) Rehearsing for outside interactions",
      "D) Performance for the therapist"
    ],
    correct: 1,
    explanation: "Enactment involves family members interacting in the session, allowing the therapist to observe dynamics directly and guide change in real-time."
  },
  {
    domain: "Helping Relationships",
    question: "What does it mean for a therapist to be 'transparent' in their work?",
    options: [
      "A) Sharing all personal information with the client",
      "B) Being open and authentic about feelings, reactions, or limitations within appropriate boundaries",
      "C) Avoiding responsibility for mistakes",
      "D) Pretending to have answers when you don't"
    ],
    correct: 1,
    explanation: "Therapeutic transparency involves appropriate self-disclosure and honesty about the therapeutic process, reactions, or limitations, enhancing authenticity and trust."
  },
  {
    domain: "Helping Relationships",
    question: "What is the difference between 'self-disclosure' and 'self-focus'?",
    options: [
      "A) They are the same thing",
      "B) Self-disclosure shares relevant personal information for the client's benefit; self-focus centers on the counselor's needs or experiences",
      "C) Self-focus is appropriate in counseling",
      "D) Neither has a place in counseling"
    ],
    correct: 1,
    explanation: "Appropriate self-disclosure supports the client's growth; self-focus diverts attention to the counselor's agenda, violating counseling ethics and boundaries."
  },
  {
    domain: "Helping Relationships",
    question: "What is 'professional distance' and how should it be maintained?",
    options: [
      "A) Complete emotional detachment from clients",
      "B) A balance of warmth and appropriate boundaries that protects the client while maintaining therapeutic effectiveness",
      "C) No personal contact outside of sessions",
      "D) Never discussing the relationship with the client"
    ],
    correct: 1,
    explanation: "Professional distance involves maintaining boundaries while remaining warm and engaged, protecting both client and counselor from harm."
  }
];

module.exports = { HELPING_QUESTIONS };
