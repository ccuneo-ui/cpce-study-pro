const RESEARCH_QUESTIONS = [
  {
    domain: "Research & Program Evaluation",
    question: "A counselor researcher wants to examine the effect of cognitive-behavioral therapy on anxiety levels in adolescents. She randomly assigns 60 participants to either a treatment group or a control group. This study design is best classified as:",
    options: [
      "A) Correlational research",
      "B) True experimental design",
      "C) Quasi-experimental design",
      "D) Single-subject design"
    ],
    correct: 1,
    explanation: "This is a true experimental design because it includes random assignment of participants to groups, manipulation of an independent variable, and control of the dependent variable."
  },
  {
    domain: "Research & Program Evaluation",
    question: "In a research study examining the relationship between counselor empathy and client outcomes, the researcher measures both variables but does not manipulate either one. What type of research design is this?",
    options: [
      "A) Experimental design",
      "B) Quasi-experimental design",
      "C) Correlational research",
      "D) Single-subject design"
    ],
    correct: 2,
    explanation: "Correlational research examines relationships between variables without manipulation or random assignment, making it appropriate for studying associations like empathy and outcomes."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A researcher implements a grief counseling intervention in an agency and compares client outcomes before and after the program without a control group. This design is best described as:",
    options: [
      "A) True experimental",
      "B) Pre-experimental",
      "C) Quasi-experimental",
      "D) Correlational"
    ],
    correct: 1,
    explanation: "A pre-experimental design lacks random assignment and control groups but may include a pretest-posttest comparison, representing the weakest form of experimental design."
  },
  {
    domain: "Research & Program Evaluation",
    question: "In a quasi-experimental design comparing two counseling centers' outcomes where assignment to centers is not random, which validity threat is most concerning?",
    options: [
      "A) Selection bias",
      "B) History effect",
      "C) Testing effect",
      "D) Instrumentation"
    ],
    correct: 0,
    explanation: "Selection bias is the primary threat in quasi-experimental designs because participants are not randomly assigned, meaning pre-existing differences may explain outcome differences."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A single-subject design studying the effect of assertiveness training on a client's social interactions would most likely use which measurement approach?",
    options: [
      "A) Group comparison at baseline and endpoint",
      "B) Repeated measures across baseline and intervention phases",
      "C) Survey of multiple clients",
      "D) Meta-analysis of published studies"
    ],
    correct: 1,
    explanation: "Single-subject designs use repeated measures across different phases (baseline, intervention, often follow-up) to track individual client change over time."
  },
  {
    domain: "Research & Program Evaluation",
    question: "In a multiple baseline single-subject design, the intervention is introduced sequentially across different:",
    options: [
      "A) Time periods for the same client",
      "B) Behaviors, clients, or settings",
      "C) Counselors in the same agency",
      "D) Types of measurement instruments"
    ],
    correct: 1,
    explanation: "Multiple baseline designs stagger intervention introduction across behaviors, clients, or settings to strengthen inference about treatment effectiveness."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A qualitative researcher uses open-ended interviews to develop a theory about how adolescents cope with parental divorce. This approach is most consistent with:",
    options: [
      "A) Phenomenology",
      "B) Grounded theory",
      "C) Ethnography",
      "D) Case study"
    ],
    correct: 1,
    explanation: "Grounded theory is designed to develop theory from data through systematic coding and analysis of interview data, emerging bottom-up from participant experiences."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A researcher conducts in-depth interviews with grief counselors about their lived experience of supporting bereaved clients. This is best classified as:",
    options: [
      "A) Grounded theory",
      "B) Phenomenology",
      "C) Ethnography",
      "D) Action research"
    ],
    correct: 1,
    explanation: "Phenomenology focuses on understanding the lived experiences and subjective meanings of participants, making it ideal for exploring counselors' experiences of supporting bereaved clients."
  },
  {
    domain: "Research & Program Evaluation",
    question: "An ethnographic study of a school counseling department would primarily involve:",
    options: [
      "A) Analyzing survey responses from teachers",
      "B) Conducting extended observation of the cultural practices and norms",
      "C) Comparing outcomes between two counseling programs",
      "D) Measuring changes in student behavior from baseline to endpoint"
    ],
    correct: 1,
    explanation: "Ethnography involves prolonged immersion in a cultural setting to understand the norms, practices, and interactions that characterize the group."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A case study examining one client's therapeutic journey through counseling would be strongest if combined with which additional method to enhance generalizability?",
    options: [
      "A) Large-scale randomized controlled trial",
      "B) Qualitative meta-analysis of similar cases",
      "C) Mixed-methods approach incorporating quantitative outcome measures",
      "D) Survey of multiple counseling centers"
    ],
    correct: 2,
    explanation: "Adding quantitative measures to a case study creates a mixed-methods design that strengthens both depth (qualitative narrative) and generalizability (quantitative data)."
  },
  {
    domain: "Research & Program Evaluation",
    question: "An action research project in which a school counselor implements a new group intervention and uses student feedback to continuously improve it exemplifies:",
    options: [
      "A) Pure basic research",
      "B) Applied action research for program improvement",
      "C) Explanatory sequential mixed methods",
      "D) Meta-analytic review"
    ],
    correct: 1,
    explanation: "Action research is cyclical, practice-based, and designed for practitioners to solve immediate problems and improve their own practice through ongoing feedback and refinement."
  },
  {
    domain: "Research & Program Evaluation",
    question: "In a mixed-methods study examining a counselor training program, quantitative data measuring knowledge gains is integrated with qualitative interview data about perceived competence. This best represents:",
    options: [
      "A) Exploratory sequential design",
      "B) Explanatory sequential design",
      "C) Convergent parallel design",
      "D) Transformative design"
    ],
    correct: 2,
    explanation: "Convergent parallel design collects quantitative and qualitative data concurrently and integrates them to provide comprehensive understanding of the phenomenon."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A researcher wants to study burnout in school counselors across a large state. Which sampling method would be most practical while still allowing representation across different regions and school sizes?",
    options: [
      "A) Convenience sampling",
      "B) Stratified random sampling",
      "C) Snowball sampling",
      "D) Purposive sampling"
    ],
    correct: 1,
    explanation: "Stratified random sampling divides the population into subgroups (regions, school sizes) and randomly samples from each, ensuring representation while maintaining randomization."
  },
  {
    domain: "Research & Program Evaluation",
    question: "In a study exploring barriers to mental health treatment in immigrant communities, which sampling method would be most appropriate?",
    options: [
      "A) Random sampling",
      "B) Cluster sampling",
      "C) Snowball sampling",
      "D) Systematic sampling"
    ],
    correct: 2,
    explanation: "Snowball sampling is ideal for hard-to-reach populations; initial participants refer others, building a sample through social networks and trust within the community."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A researcher distributes questionnaires to all clients who visit a counseling center on a particular week. This represents:",
    options: [
      "A) Random sampling",
      "B) Cluster sampling",
      "C) Stratified sampling",
      "D) Convenience sampling"
    ],
    correct: 3,
    explanation: "Convenience sampling uses readily available participants who happen to meet the researcher's criteria, without random selection or stratification."
  },
  {
    domain: "Research & Program Evaluation",
    question: "Which validity threat occurs when participants improve on a dependent measure simply due to repeated testing rather than the intervention?",
    options: [
      "A) History effect",
      "B) Testing effect",
      "C) Maturation",
      "D) Instrumentation"
    ],
    correct: 1,
    explanation: "Testing effect (or practice effect) refers to improvement due to familiarity with assessment instruments, independent of the intervention."
  },
  {
    domain: "Research & Program Evaluation",
    question: "If scores on a depression measure become more reliable as participants become more familiar with the test items over time, this represents a threat to validity called:",
    options: [
      "A) Testing effect",
      "B) Instrumentation",
      "C) Selection bias",
      "D) Attrition"
    ],
    correct: 1,
    explanation: "Both testing and instrumentation threats involve the measurement process; instrumentation involves changes in the measure itself, while testing involves participant familiarity."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A counseling study loses 40% of participants by the final follow-up measurement. This threat to validity is called:",
    options: [
      "A) Selection bias",
      "B) Attrition",
      "C) History effect",
      "D) Regression to the mean"
    ],
    correct: 1,
    explanation: "Attrition (or mortality) occurs when participants drop out of the study, potentially biasing results if those who leave differ from those who remain."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A researcher compares clients who voluntarily enrolled in a new counseling program with clients receiving standard services. The groups may differ in motivation, which threatens:",
    options: [
      "A) Internal validity through selection bias",
      "B) External validity through sampling method",
      "C) Construct validity through operationalization",
      "D) Statistical conclusion validity"
    ],
    correct: 0,
    explanation: "Selection bias threatens internal validity by creating pre-existing differences between groups that could explain outcome differences, independent of the treatment."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A counseling intervention study conducted in one urban community may have difficulty generalizing findings to rural settings. This reflects a threat to:",
    options: [
      "A) Internal validity",
      "B) Construct validity",
      "C) External validity",
      "D) Statistical conclusion validity"
    ],
    correct: 2,
    explanation: "External validity concerns generalizability of findings to different populations, settings, and conditions; narrow sample composition limits generalizability."
  },
  {
    domain: "Research & Program Evaluation",
    question: "Regression to the mean is most likely to become a confounding variable in research designs where:",
    options: [
      "A) Participants are randomly assigned",
      "B) Participants are selected based on extreme scores",
      "C) Measurement is repeated frequently",
      "D) The sample size is very large"
    ],
    correct: 1,
    explanation: "Regression to the mean occurs when extreme scores naturally move closer to the population mean on retesting; selecting participants based on extreme baseline scores makes this likely."
  },
  {
    domain: "Research & Program Evaluation",
    question: "In a research study of a new school-based counseling program, if positive outcomes occur only because the program participants receive special attention rather than the program content itself, this is an example of:",
    options: [
      "A) Maturation effect",
      "B) Instrumentation threat",
      "C) Hawthorne effect",
      "D) History effect"
    ],
    correct: 2,
    explanation: "The Hawthorne effect refers to behavioral changes resulting from awareness of being observed or from receiving special attention, not from the intervention itself."
  },
  {
    domain: "Research & Program Evaluation",
    question: "The mean is most appropriately used as a measure of central tendency when data are:",
    options: [
      "A) Nominal",
      "B) Ordinal",
      "C) Interval or ratio",
      "D) Categorical"
    ],
    correct: 2,
    explanation: "The mean requires interval or ratio data because it assumes equal intervals between values; it is inappropriate for nominal or ordinal data."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A counselor researcher reports that the median score on a measure of anxiety is 25. This tells us that:",
    options: [
      "A) The average anxiety score is 25",
      "B) 50% of scores fall below 25 and 50% fall above",
      "C) The most frequently occurring anxiety score is 25",
      "D) The range of anxiety scores is 25"
    ],
    correct: 1,
    explanation: "The median is the middle score; by definition, 50% of the distribution falls below and 50% above the median value."
  },
  {
    domain: "Research & Program Evaluation",
    question: "In a sample of counseling students' test scores (85, 88, 89, 90, 92, 100), which measure of central tendency would be most inflated by the outlier score of 100?",
    options: [
      "A) Median",
      "B) Mode",
      "C) Mean",
      "D) Range"
    ],
    correct: 2,
    explanation: "The mean incorporates all values and is therefore most affected by extreme scores or outliers; the median and mode are more resistant to outliers."
  },
  {
    domain: "Research & Program Evaluation",
    question: "Standard deviation differs from variance in that standard deviation:",
    options: [
      "A) Is always smaller in value",
      "B) Measures spread in the same units as the original data",
      "C) Is less affected by outliers",
      "D) Can only be calculated for normally distributed data"
    ],
    correct: 1,
    explanation: "Variance is expressed in squared units; standard deviation is the square root of variance and expresses variability in the original units, making it more interpretable."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A counselor researcher finds a correlation of r = 0.15 between weekly counseling attendance and anxiety reduction. What can be concluded?",
    options: [
      "A) Attendance causes anxiety reduction",
      "B) There is a weak positive relationship",
      "C) Attendance should be mandatory",
      "D) The relationship is statistically significant"
    ],
    correct: 1,
    explanation: "A correlation of 0.15 indicates a weak positive relationship; correlations alone cannot establish causation and statistical significance depends on sample size."
  },
  {
    domain: "Research & Program Evaluation",
    question: "In a normal distribution, approximately what percentage of the data falls within one standard deviation of the mean?",
    options: [
      "A) 50%",
      "B) 68%",
      "C) 95%",
      "D) 99.7%"
    ],
    correct: 1,
    explanation: "In a normal distribution, approximately 68% of data falls within ±1 SD, 95% within ±2 SD, and 99.7% within ±3 SD of the mean."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A t-test would be most appropriate for comparing:",
    options: [
      "A) Means between two groups",
      "B) Frequencies across three categorical groups",
      "C) Correlation between multiple variables",
      "D) Regression of outcomes on predictors"
    ],
    correct: 0,
    explanation: "The independent samples t-test compares means between two groups; ANOVA is used for three or more groups."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A researcher compares anxiety scores across three different counseling modalities (individual, group, and couples). Which inferential statistic is most appropriate?",
    options: [
      "A) Independent samples t-test",
      "B) Paired samples t-test",
      "C) One-way ANOVA",
      "D) Chi-square test"
    ],
    correct: 2,
    explanation: "One-way ANOVA compares means across three or more independent groups; chi-square is for categorical data, and t-tests are limited to two groups."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A chi-square test of independence would be used to examine the relationship between:",
    options: [
      "A) Continuous counselor empathy scores and continuous client outcome measures",
      "B) Categorical counselor type (licensed vs. unlicensed) and categorical client diagnosis",
      "C) Mean depression scores between two counseling groups",
      "D) Correlation between hours in therapy and symptom reduction"
    ],
    correct: 1,
    explanation: "Chi-square tests examine relationships between categorical variables by comparing observed and expected frequencies in contingency tables."
  },
  {
    domain: "Research & Program Evaluation",
    question: "In hypothesis testing, a Type I error occurs when:",
    options: [
      "A) The null hypothesis is false but we fail to reject it",
      "B) The null hypothesis is true but we reject it",
      "C) Our sample is too small",
      "D) Our measurement instrument is unreliable"
    ],
    correct: 1,
    explanation: "Type I error (false positive) is rejecting a true null hypothesis, typically controlled by setting alpha level; Type II is failing to reject a false null."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A Type II error in a counseling outcome study would involve:",
    options: [
      "A) Concluding the intervention works when it actually doesn't",
      "B) Concluding the intervention doesn't work when it actually does",
      "C) Using a biased sample",
      "D) Misinterpreting the correlation coefficient"
    ],
    correct: 1,
    explanation: "Type II error (false negative) is failing to reject a false null hypothesis, failing to detect a real effect; it increases with small samples and weak measurements."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A researcher sets the alpha level at 0.01 instead of 0.05. This decision:",
    options: [
      "A) Increases the risk of Type I error",
      "B) Decreases the risk of Type I error but increases Type II error risk",
      "C) Eliminates the possibility of Type II error",
      "D) Has no effect on error rates"
    ],
    correct: 1,
    explanation: "Lowering alpha reduces Type I error probability but increases the required effect size to reach significance, making Type II error more likely."
  },
  {
    domain: "Research & Program Evaluation",
    question: "Statistical significance at p < 0.05 indicates that:",
    options: [
      "A) The finding is practically important",
      "B) There is only a 5% probability the null hypothesis is true",
      "C) The probability of obtaining this result by chance is less than 5%",
      "D) The effect size is clinically meaningful"
    ],
    correct: 2,
    explanation: "P < 0.05 means the probability of observing the result if the null hypothesis were true is less than 5%; it does not directly address practical significance or effect size."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A large sample study finds a statistically significant relationship (p < 0.05) between number of sessions attended and anxiety reduction with effect size r = 0.12. This illustrates the distinction between:",
    options: [
      "A) Internal and external validity",
      "B) Statistical significance and practical significance",
      "C) Type I and Type II errors",
      "D) Construct and criterion validity"
    ],
    correct: 1,
    explanation: "Statistical significance (p < 0.05) indicates a real effect exists, but the small effect size (r = 0.12) suggests limited practical importance; large samples can find significant but small effects."
  },
  {
    domain: "Research & Program Evaluation",
    question: "Effect size is most valuable in research interpretation because it:",
    options: [
      "A) Determines statistical significance",
      "B) Eliminates the need for hypothesis testing",
      "C) Indicates the magnitude of treatment effect independent of sample size",
      "D) Prevents Type I errors"
    ],
    correct: 2,
    explanation: "Effect size measures the practical magnitude of an effect and is not dependent on sample size like p-values are, making it crucial for evaluating clinical importance."
  },
  {
    domain: "Research & Program Evaluation",
    question: "In comparing three counseling interventions for anxiety, a researcher conducts an ANOVA and finds a significant result. The next appropriate step would be:",
    options: [
      "A) Conclude all three interventions differ significantly",
      "B) Stop analysis and report results",
      "C) Conduct post-hoc tests to identify which groups differ",
      "D) Discard the data and conduct a new study"
    ],
    correct: 2,
    explanation: "Significant ANOVA indicates at least one group differs but doesn't specify which; post-hoc tests (Tukey, Bonferroni) identify specific pairwise differences."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A confidence interval of 95% for a mean suggests that:",
    options: [
      "A) 95% of individual scores fall within the interval",
      "B) The true population mean has a 95% probability of falling within the interval",
      "C) We are 95% confident the interval captures the population parameter",
      "D) 95% of samples would produce identical intervals"
    ],
    correct: 2,
    explanation: "A 95% CI means if we repeated sampling, approximately 95% of such intervals would contain the true population parameter; the parameter itself is fixed, not probabilistic."
  },
  {
    domain: "Research & Program Evaluation",
    question: "In a simple linear regression predicting client outcomes from counselor empathy scores, the R-squared value indicates:",
    options: [
      "A) The strength of the correlation",
      "B) The proportion of outcome variance explained by empathy",
      "C) The statistical significance of the relationship",
      "D) The effect size compared to other studies"
    ],
    correct: 1,
    explanation: "R-squared (coefficient of determination) represents the percentage of variance in the dependent variable explained by the independent variable(s)."
  },
  {
    domain: "Research & Program Evaluation",
    question: "Reliability in research measurement refers to:",
    options: [
      "A) Whether the instrument measures what it claims to measure",
      "B) The consistency and stability of measurement",
      "C) The generalizability of findings to other populations",
      "D) The probability of rejecting the null hypothesis"
    ],
    correct: 1,
    explanation: "Reliability concerns consistency; validity concerns accuracy of measurement. High reliability is necessary but not sufficient for validity."
  },
  {
    domain: "Research & Program Evaluation",
    question: "Internal consistency reliability measured by Cronbach's alpha would be most appropriate for a:",
    options: [
      "A) Single-item measure",
      "B) Multi-item scale assessing a single construct",
      "C) Behavioral observation checklist",
      "D) Interview protocol"
    ],
    correct: 1,
    explanation: "Cronbach's alpha measures internal consistency—whether items on a scale correlate with each other and measure a single construct."
  },
  {
    domain: "Research & Program Evaluation",
    question: "Test-retest reliability of a depression measure would be most threatened by:",
    options: [
      "A) The passage of time and natural mood fluctuations",
      "B) Inter-item correlations",
      "C) Response bias",
      "D) Sampling error"
    ],
    correct: 0,
    explanation: "Test-retest reliability assumes the construct is stable; natural changes over time, therapy effects, or maturation can reduce correlation between time points."
  },
  {
    domain: "Research & Program Evaluation",
    question: "Content validity of a counselor competency assessment would be established through:",
    options: [
      "A) Correlation with actual client outcomes",
      "B) Expert review of whether items represent the domain",
      "C) Administering to multiple groups",
      "D) Item-total score correlations"
    ],
    correct: 1,
    explanation: "Content validity involves expert judgment about whether test items adequately sample the domain being assessed; it cannot be statistically tested."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A depression measure correlates strongly with clinician diagnosis of depression. This demonstrates:",
    options: [
      "A) Construct validity",
      "B) Criterion validity",
      "C) Content validity",
      "D) Internal consistency"
    ],
    correct: 1,
    explanation: "Criterion validity (or concurrent validity) is demonstrated when a measure correlates with an external criterion like diagnosis or established measures."
  },
  {
    domain: "Research & Program Evaluation",
    question: "Formative program evaluation is best used for:",
    options: [
      "A) Determining if a program achieved its stated outcomes",
      "B) Improving program implementation during the program period",
      "C) Making decisions about program continuation or termination",
      "D) Comparing outcomes across multiple programs"
    ],
    correct: 1,
    explanation: "Formative evaluation provides ongoing feedback during program implementation to guide improvements; summative evaluation assesses overall outcomes after completion."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A school counselor evaluates the new peer mentoring program by examining whether it achieved its goal of reducing dropout rates. This represents:",
    options: [
      "A) Needs assessment",
      "B) Formative evaluation",
      "C) Summative evaluation",
      "D) Action research"
    ],
    correct: 2,
    explanation: "Summative evaluation determines whether a completed program achieved its intended outcomes, often for accountability and decision-making purposes."
  },
  {
    domain: "Research & Program Evaluation",
    question: "Before developing a new counseling program for students with learning disabilities, a counselor should first conduct:",
    options: [
      "A) Summative evaluation",
      "B) Needs assessment",
      "C) Outcome-based evaluation",
      "D) Meta-analysis"
    ],
    correct: 1,
    explanation: "Needs assessment identifies gaps between current and desired states, determining whether a new program is needed and what it should address."
  },
  {
    domain: "Research & Program Evaluation",
    question: "Outcome-based evaluation differs from other program evaluation approaches by emphasizing:",
    options: [
      "A) Process and implementation fidelity",
      "B) Client satisfaction ratings",
      "C) Measurable changes in target outcomes",
      "D) Feedback during program delivery"
    ],
    correct: 2,
    explanation: "Outcome-based evaluation focuses on measuring specific, predetermined outcomes; it's results-oriented rather than process-focused."
  },
  {
    domain: "Research & Program Evaluation",
    question: "The primary purpose of an Institutional Review Board (IRB) in research is to:",
    options: [
      "A) Ensure statistical validity of findings",
      "B) Review and approve research protocols for ethical compliance",
      "C) Evaluate the clinical significance of results",
      "D) Approve funding for research projects"
    ],
    correct: 1,
    explanation: "IRBs protect human research participants by reviewing protocols for ethical issues including informed consent, risk assessment, and vulnerable population protections."
  },
  {
    domain: "Research & Program Evaluation",
    question: "Informed consent in counseling research must include:",
    options: [
      "A) Guarantees of positive outcomes",
      "B) Information about the study, risks, benefits, confidentiality, and right to withdraw",
      "C) The researcher's personal background",
      "D) Promises that data will never be disclosed"
    ],
    correct: 1,
    explanation: "Informed consent requires disclosure of study purpose, procedures, risks, benefits, confidentiality limits, and the voluntary nature of participation."
  },
  {
    domain: "Research & Program Evaluation",
    question: "When conducting research with minors, researchers must obtain consent from:",
    options: [
      "A) The minor only",
      "B) Parents/guardians and the minor (assent)",
      "C) The school principal",
      "D) The IRB chair"
    ],
    correct: 1,
    explanation: "Children are considered a vulnerable population requiring parental/guardian consent plus child assent (age-appropriate agreement) to participate."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A researcher discovers that a potential study participant has a severe, untreated mental health condition during screening. The ethical response is to:",
    options: [
      "A) Exclude them without explanation",
      "B) Include them but monitor closely",
      "C) Inform them of the condition and provide referral information",
      "D) Continue without disclosure to maintain confidentiality"
    ],
    correct: 2,
    explanation: "Ethical research requires beneficence (promoting welfare); researchers should provide appropriate referrals and clinical information to participants who need services."
  },
  {
    domain: "Research & Program Evaluation",
    question: "Research data confidentiality is best protected through:",
    options: [
      "A) Storing data on public servers",
      "B) Using participant names as identifiers",
      "C) Secure storage with participant codes and separate code keys",
      "D) Sharing data with all study staff"
    ],
    correct: 2,
    explanation: "Confidentiality is maintained by separating identifiable information from research data, using codes instead of names, and restricting access to key materials."
  },
  {
    domain: "Research & Program Evaluation",
    question: "The primary advantage of evidence-based practice in counseling is that it:",
    options: [
      "A) Relies solely on clinical intuition",
      "B) Integrates research evidence with clinical expertise and client preferences",
      "C) Applies the same intervention to all clients",
      "D) Eliminates the need for outcome measurement"
    ],
    correct: 1,
    explanation: "EBP combines empirical research, practitioner expertise, and client values/preferences to guide clinical decision-making."
  },
  {
    domain: "Research & Program Evaluation",
    question: "When appraising research evidence for evidence-based practice, which type of study typically provides the strongest evidence?",
    options: [
      "A) Case study",
      "B) Correlational study",
      "C) Randomized controlled trial",
      "D) Qualitative phenomenology"
    ],
    correct: 2,
    explanation: "RCTs with random assignment and control groups provide the strongest evidence in research hierarchies, though qualitative and other designs have important roles."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A meta-analysis combines results from multiple studies to:",
    options: [
      "A) Conduct a new experiment",
      "B) Increase the sample size of a single study",
      "C) Provide a quantitative synthesis of research evidence",
      "D) Replace the need for future research"
    ],
    correct: 2,
    explanation: "Meta-analysis statistically combines results across multiple studies to provide a summary effect size and test for consistency of findings."
  },
  {
    domain: "Research & Program Evaluation",
    question: "Publication bias in meta-analyses is a concern because:",
    options: [
      "A) Published studies use better methods",
      "B) Studies with positive results are more likely to be published than null findings",
      "C) Unpublished studies are always of lower quality",
      "D) It is impossible to locate published studies"
    ],
    correct: 1,
    explanation: "Publication bias occurs when studies showing positive effects are preferentially published, potentially inflating the apparent efficacy of interventions in meta-analyses."
  },
  {
    domain: "Research & Program Evaluation",
    question: "Heterogeneity in a meta-analysis refers to:",
    options: [
      "A) The number of studies included",
      "B) The variability in effect sizes across studies",
      "C) The sample sizes of individual studies",
      "D) Different outcomes measured"
    ],
    correct: 1,
    explanation: "Heterogeneity is measured by I-squared and indicates whether effect sizes vary significantly, suggesting potential moderators or inconsistent findings."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A researcher wants to examine whether the therapeutic alliance predicts dropout rates in counseling. The best statistical approach would be:",
    options: [
      "A) ANOVA",
      "B) Chi-square test",
      "C) Logistic regression",
      "D) Pearson correlation"
    ],
    correct: 2,
    explanation: "Logistic regression is appropriate when the outcome is binary (dropout vs. completion); it predicts probability of the categorical outcome."
  },
  {
    domain: "Research & Program Evaluation",
    question: "In a study examining the long-term effects of group counseling, attrition is highest among which participants?",
    options: [
      "A) Those reporting initial improvement",
      "B) Those with the most severe initial symptoms",
      "C) Older participants",
      "D) Cannot be determined without specific data"
    ],
    correct: 3,
    explanation: "Without specific study data, it's impossible to determine dropout patterns; attrition depends on multiple factors and varies by population and intervention."
  },
  {
    domain: "Research & Program Evaluation",
    question: "Construct validity in outcome measurement for counseling would involve:",
    options: [
      "A) Ensuring the measure captures the therapeutic construct being targeted",
      "B) Using the same measure for all clients",
      "C) Obtaining the highest possible mean scores",
      "D) Minimizing the number of assessment items"
    ],
    correct: 0,
    explanation: "Construct validity ensures the measure actually assesses the intended theoretical construct (e.g., therapeutic alliance, self-efficacy)."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A strength of qualitative research in counseling is that it:",
    options: [
      "A) Provides generalizable statistical evidence",
      "B) Explores complex processes and meanings in depth",
      "C) Requires fewer participants than quantitative studies",
      "D) Eliminates researcher bias"
    ],
    correct: 1,
    explanation: "Qualitative research excels at capturing nuanced experiences, meanings, and processes that numbers alone cannot convey, though samples are typically smaller."
  },
  {
    domain: "Research & Program Evaluation",
    question: "Triangulation in qualitative research refers to:",
    options: [
      "A) Using three research participants",
      "B) Collecting data from three different settings",
      "C) Using multiple data sources or methods to verify findings",
      "D) Employing three different statistical tests"
    ],
    correct: 2,
    explanation: "Triangulation involves using multiple methods, sources, or perspectives to corroborate findings and enhance credibility of qualitative research."
  },
  {
    domain: "Research & Program Evaluation",
    question: "Member checking in qualitative research involves:",
    options: [
      "A) Having the researcher verify their own interpretations",
      "B) Returning findings to participants to confirm accuracy",
      "C) Checking that all study members are present",
      "D) Verifying sample demographics"
    ],
    correct: 1,
    explanation: "Member checking enhances credibility by having participants review and confirm the researcher's interpretations of their experiences."
  },
  {
    domain: "Research & Program Evaluation",
    question: "Saturation in qualitative research refers to the point where:",
    options: [
      "A) All participants have been found",
      "B) No new themes or information emerge from additional data",
      "C) The study has reached statistical power",
      "D) The sample size is large enough"
    ],
    correct: 1,
    explanation: "Data saturation occurs when additional data collection yields no new insights; it determines sample adequacy in qualitative research."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A researcher examining school counselor experiences during a pandemic conducts monthly interviews as events unfold. This approach best represents:",
    options: [
      "A) Retrospective case study",
      "B) Prospective longitudinal qualitative study",
      "C) Cross-sectional qualitative survey",
      "D) Historical document analysis"
    ],
    correct: 1,
    explanation: "Prospective longitudinal qualitative research collects data over time as events occur, allowing understanding of processes and change."
  },
  {
    domain: "Research & Program Evaluation",
    question: "In coding qualitative interview data, a researcher develops categories and themes based on patterns in the data. This inductive approach is most aligned with:",
    options: [
      "A) Hypothesis testing",
      "B) Experimental research",
      "C) Grounded theory methodology",
      "D) Pre-determined coding schemes"
    ],
    correct: 2,
    explanation: "Grounded theory uses inductive coding to develop categories and theory from data bottom-up, rather than testing predetermined hypotheses."
  },
  {
    domain: "Research & Program Evaluation",
    question: "The concept of fidelity in counseling research refers to:",
    options: [
      "A) The loyalty of research participants",
      "B) Adherence to the intervention protocol as designed",
      "C) The accuracy of demographic information",
      "D) Client commitment to treatment"
    ],
    correct: 1,
    explanation: "Treatment fidelity ensures the intervention is implemented as intended; it's essential for determining whether observed effects are due to the treatment itself."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A counseling intervention study finds that cognitive therapy produces outcomes equivalent to interpersonal therapy when both are implemented with fidelity. This suggests:",
    options: [
      "A) Both interventions are equally effective",
      "B) The common factors shared by both approaches may account for outcomes",
      "C) Cognitive therapy is superior",
      "D) Neither intervention is effective"
    ],
    correct: 1,
    explanation: "Equivalent outcomes across theoretically different interventions raises questions about common therapeutic factors versus specific technique effects."
  },
  {
    domain: "Research & Program Evaluation",
    question: "Moderator variables in counseling research are examined to determine:",
    options: [
      "A) Why the primary relationship exists",
      "B) For whom or under what conditions an intervention works best",
      "C) Whether sampling was adequate",
      "D) The statistical significance of findings"
    ],
    correct: 1,
    explanation: "Moderators specify conditions or characteristics that influence the strength or direction of a relationship (e.g., age, gender, severity level)."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A mediator variable in research explains:",
    options: [
      "A) The conditions under which an effect occurs",
      "B) The mechanism or process through which an independent variable affects outcomes",
      "C) Whether the study sample is representative",
      "D) The strength of the correlation"
    ],
    correct: 1,
    explanation: "Mediators explain the process; if X affects Y, the mediator is the mechanism (M) explaining how X leads to Y."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A study of a counseling intervention shows that client hope mediates the relationship between counselor empathy and symptom reduction. This finding suggests:",
    options: [
      "A) Hope causes empathy",
      "B) Empathy improves outcomes by increasing client hope",
      "C) Hope is not important for outcomes",
      "D) Counselor empathy is ineffective"
    ],
    correct: 1,
    explanation: "The mediation indicates that the mechanism through which empathy improves outcomes is by increasing client hope."
  },
  {
    domain: "Research & Program Evaluation",
    question: "Which aspect of research design is most critical for establishing causal relationships?",
    options: [
      "A) Large sample size",
      "B) Control or comparison groups",
      "C) Multiple outcome measures",
      "D) Longitudinal follow-up"
    ],
    correct: 1,
    explanation: "Control groups allow comparison of intervention effects against baseline or alternative conditions, essential for inferring causality."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A researcher implements a counseling intervention one week after a natural disaster and measures outcomes. Which validity threat is most prominent?",
    options: [
      "A) Testing effect",
      "B) History effect",
      "C) Maturation",
      "D) Instrumentation"
    ],
    correct: 1,
    explanation: "History effects refer to external events influencing outcomes; measuring after a major disaster conflates the intervention with disaster effects."
  },
  {
    domain: "Research & Program Evaluation",
    question: "In a matched pairs research design, participants are matched based on:",
    options: [
      "A) Demographic similarity alone",
      "B) Variables likely to influence the outcome",
      "C) Alphabetical order",
      "D) Counselor preference"
    ],
    correct: 1,
    explanation: "Matching controls for confounding variables by pairing participants on characteristics (e.g., age, baseline symptom severity) that affect outcomes."
  },
  {
    domain: "Research & Program Evaluation",
    question: "An interrupted time series design in program evaluation involves:",
    options: [
      "A) Collecting data once before and once after an intervention",
      "B) Multiple measurements before and after a program change to assess its impact",
      "C) Interviewing participants at different time points",
      "D) Comparing two groups at multiple intervals"
    ],
    correct: 1,
    explanation: "Interrupted time series uses multiple pre and post measurements to detect whether program changes produce observable shifts in trends."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A researcher uses simulation or hypothetical scenario methods to examine counselor decision-making in complex cases. This represents:",
    options: [
      "A) Naturalistic observation",
      "B) Experimental manipulation",
      "C) Analogue research",
      "D) Longitudinal study"
    ],
    correct: 2,
    explanation: "Analogue research uses simulations or analogues of real situations to study phenomena under controlled conditions while maintaining some realism."
  },
  {
    domain: "Research & Program Evaluation",
    question: "The advantage of analogue research in counseling is that it:",
    options: [
      "A) Perfectly replicates real counseling",
      "B) Allows experimental control while approximating real-world scenarios",
      "C) Eliminates the need for field studies",
      "D) Requires no ethical oversight"
    ],
    correct: 1,
    explanation: "Analogue research balances experimental control with ecological validity by creating situation approximations that are more manageable than real-world studies."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A researcher examines archival data (existing counseling records) to study change in client functioning over time. This approach minimizes which threat to validity?",
    options: [
      "A) Hawthorne effect",
      "B) Testing effect",
      "C) Selection bias",
      "D) Maturation"
    ],
    correct: 0,
    explanation: "Archival/secondary data research avoids reactive effects like Hawthorne effect because data were collected without research intent."
  },
  {
    domain: "Research & Program Evaluation",
    question: "Ecological momentary assessment (EMA) in counseling research collects data:",
    options: [
      "A) Retrospectively in interviews",
      "B) In real-time through repeated daily reports",
      "C) Once at study endpoints",
      "D) Through clinical observation only"
    ],
    correct: 1,
    explanation: "EMA involves frequent, real-time data collection about daily experiences and behaviors, reducing recall bias and capturing natural variation."
  },
  {
    domain: "Research & Program Evaluation",
    question: "When reporting research results, effect sizes should be included because they:",
    options: [
      "A) Replace the need for p-values",
      "B) Provide information about practical significance independent of sample size",
      "C) Are required by the American Psychological Association",
      "D) Eliminate Type I errors"
    ],
    correct: 1,
    explanation: "Effect sizes communicate the magnitude of findings in a standardized way; they are essential for research interpretation and meta-analysis."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A researcher reports that a new counseling intervention shows an effect size of d = 0.85 compared to standard care. This suggests:",
    options: [
      "A) A small effect",
      "B) A medium effect",
      "C) A large effect",
      "D) Statistical significance is uncertain"
    ],
    correct: 2,
    explanation: "Cohen's guidelines for d: small = 0.20, medium = 0.50, large = 0.80; therefore d = 0.85 represents a large effect."
  },
  {
    domain: "Research & Program Evaluation",
    question: "Number needed to treat (NNT) in clinical research represents:",
    options: [
      "A) The total number of participants in a study",
      "B) How many people must receive a treatment for one additional person to benefit",
      "C) The minimum sample size for statistical significance",
      "D) The effect size of a treatment"
    ],
    correct: 1,
    explanation: "NNT indicates clinical utility; if NNT = 4, treating 4 people results in 1 additional positive outcome beyond control."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A counseling research paper should include a limitations section that addresses:",
    options: [
      "A) Only strengths of the study",
      "B) How design and implementation factors affect generalizability and conclusions",
      "C) Criticisms of other researchers",
      "D) Suggestions for the reader's future studies only"
    ],
    correct: 1,
    explanation: "The limitations section honestly assesses threats to validity, sample characteristics, and design constraints that affect interpretation and generalizability."
  },
  {
    domain: "Research & Program Evaluation",
    question: "Replication studies in counseling research are important because they:",
    options: [
      "A) Are easier to conduct than original research",
      "B) Verify findings in different populations and contexts",
      "C) Establish statistical significance",
      "D) Eliminate the need for literature reviews"
    ],
    correct: 1,
    explanation: "Replication builds confidence in findings by testing them across different samples, settings, and methodologies."
  },
  {
    domain: "Research & Program Evaluation",
    question: "When a researcher reports conducting multiple statistical tests without correction for multiple comparisons, this increases risk of:",
    options: [
      "A) Type II error",
      "B) Attrition bias",
      "C) Type I error",
      "D) Selection bias"
    ],
    correct: 2,
    explanation: "Conducting multiple tests without correction (e.g., Bonferroni) increases Type I error probability; each test carries alpha risk."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A counselor wants to evaluate whether clients in a new mindfulness group show greater symptom improvement than those in standard group counseling. The most rigorous design would be:",
    options: [
      "A) Single group pretest-posttest",
      "B) Randomized controlled trial",
      "C) Qualitative interviews with participants",
      "D) Case study of one client"
    ],
    correct: 1,
    explanation: "RCT with random assignment and control groups provides the strongest design for determining intervention efficacy."
  },
  {
    domain: "Research & Program Evaluation",
    question: "The distinction between efficacy and effectiveness in counseling research is that efficacy refers to:",
    options: [
      "A) Real-world outcome success",
      "B) Treatment effects demonstrated under optimal controlled conditions",
      "C) Whether the intervention is cost-effective",
      "D) Client satisfaction with outcomes"
    ],
    correct: 1,
    explanation: "Efficacy = does it work under ideal research conditions; effectiveness = does it work in routine practice; both are needed for EBP."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A meta-analysis examining online counseling interventions should consider heterogeneity due to:",
    options: [
      "A) Different therapist credentials only",
      "B) Varying platforms, populations, duration, and outcome measures",
      "C) The number of studies published",
      "D) The authors' institutional affiliations"
    ],
    correct: 1,
    explanation: "Sources of heterogeneity in meta-analyses include methodological differences, sample characteristics, intervention variations, and outcome measurement approaches."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A researcher finds that mindfulness interventions show larger effects in studies with higher quality ratings. This suggests:",
    options: [
      "A) Mindfulness is more effective in higher-quality studies",
      "B) Study quality may have influenced the observed effect sizes",
      "C) All previous research was flawed",
      "D) Mindfulness should not be recommended"
    ],
    correct: 1,
    explanation: "Quality variations affect effect sizes; rigorous studies often show smaller effects than lower-quality studies, suggesting initial effects may be inflated."
  },
  {
    domain: "Research & Program Evaluation",
    question: "When implementing a randomized controlled trial of a counseling intervention, blocking by therapist helps to:",
    options: [
      "A) Ensure each therapist conducts the same number of sessions",
      "B) Randomly assign clients within each therapist's caseload",
      "C) Control for therapist effects on outcomes",
      "D) Increase the sample size"
    ],
    correct: 2,
    explanation: "Blocking randomization within therapists controls for therapist-specific effects (e.g., skill, style) by ensuring balanced assignment across therapists."
  },
  {
    domain: "Research & Program Evaluation",
    question: "In a dismantling or component analysis study of counseling interventions, researchers systematically:",
    options: [
      "A) Remove all components and test none",
      "B) Compare full treatment to versions with components removed to identify active ingredients",
      "C) Add components sequentially without studying full treatment",
      "D) Randomly vary which clients receive which components"
    ],
    correct: 1,
    explanation: "Dismantling studies identify which intervention components are necessary and sufficient for outcomes by comparing full vs. partial treatments."
  },
  {
    domain: "Research & Program Evaluation",
    question: "A researcher examining counselor competence across different training programs should use which sampling approach?",
    options: [
      "A) Convenience sampling from one program",
      "B) Stratified sampling across programs with varying sizes and characteristics",
      "C) Snowball sampling from alumni networks",
      "D) Systematic sampling from licensed counselor lists"
    ],
    correct: 1,
    explanation: "Stratified sampling ensures representation across different training programs with varying characteristics, addressing the comparative research question."
  }
];

module.exports = { RESEARCH_QUESTIONS };
