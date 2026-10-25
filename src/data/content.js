/* ==========================================================
   All website text and lists live here.
   Edit this file to change content without touching components.
   ========================================================== */

import manualTherapy from '../assets/images/manual-therapy.jpg'
import injuryRehab from '../assets/images/injury-rehab.jpg'
import painManagement from '../assets/images/pain-management.jpg'
import sportsTherapy from '../assets/images/sports-therapy.jpg'
import postSurgery from '../assets/images/post-surgery.jpg'
import postureCare from '../assets/images/posture-care.jpg'
import stepAssessment from '../assets/images/step-assessment.jpg'
import stepTreatment from '../assets/images/step-treatment.jpg'
import stepSupport from '../assets/images/step-support.jpg'
import patient1 from '../assets/images/patient-1.jpg'
import patient2 from '../assets/images/patient-2.jpg'
import patient3 from '../assets/images/patient-3.jpg'

export const siteInfo = {
  name: 'Medicare',
  tagline: 'Physiotherapy',
  fullName: 'Medicare Physiotherapy Center',
  phone: '94154 79445',
  phoneLink: 'tel:+919415479445',
  timing: '8:30 AM – 8:00 PM',
  address: '8/204, Indira Nagar, Lucknow',
  year: new Date().getFullYear(),
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Conditions', href: '#conditions' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Reviews', href: '#reviews' },
]

export const hero = {
  intro:
    'Expert physiotherapy in Indira Nagar, Lucknow for nerve, spine and joint pain. Award-winning care to restore your strength, mobility and confidence.',
  titleLines: ['Recover. Rebuild.', 'Rise'],
  titleHighlight: 'Again.',
  badgeText: 'Female physiotherapist available',
}

export const services = [
  {
    title: 'Neck & Back Pain',
    image: painManagement,
    text: 'Relief from cervical spondylitis, sciatica, frozen shoulder and lower back pain.',
  },
  {
    title: 'Nerve Pain Treatment',
    image: manualTherapy,
    text: 'Care for nerve pain, compression, numbness, tingling and shooting pain.',
  },
  {
    title: 'Joint & Arthritis Care',
    image: postureCare,
    text: 'Treatment for knee, hip, heel, wrist and elbow pain, osteoarthritis and gout.',
  },
  {
    title: 'Injury Rehabilitation',
    image: injuryRehab,
    text: 'Recovery from old or new injuries to bones and muscles.',
  },
  {
    title: 'Spine & Post-Surgery Rehab',
    image: postSurgery,
    text: 'Advised spine surgery, or no relief after surgery? Get guided recovery.',
  },
  {
    title: 'Neuro & Vestibular Rehab',
    image: sportsTherapy,
    text: 'Neuro development therapy, dizziness and balance training, headache and migraine care.',
  },
]

export const marqueeWords = ['Pain Free Life', 'Healthy Spine', 'Strong Joints', 'Move Better']

export const about = {
  badgeTop: '2019',
  badgeLabel: 'Best Physiotherapist Award',
  text: 'At Medicare Physiotherapy Center, Indira Nagar, Lucknow, Dr. Arpit Shukla and Dr. Anita Shukla combine advanced techniques like dry needling, cupping, taping, IASTM and manual therapy with personal care. Whether it is nerve pain, a spine problem, arthritis or an old injury, we find the root cause and help you get back to a pain-free life.',
  points: [
    'Female physiotherapist available',
    'Neuro, spine & joint specialists',
    `Timing: ${siteInfo.timing}`,
  ],
}

/* "Conditions We Treat" – from the clinic pamphlet */
export const conditions = [
  { title: 'Nerve Pain', text: 'Any kind of nerve pain, compression or tension.' },
  {
    title: 'Neck, Back & Joint Pain',
    text: 'Cervical spondylitis, frozen shoulder, sciatica, hip and knee osteoarthritis, heel, sole, finger, wrist and elbow pain.',
  },
  { title: 'Numbness & Tingling', text: 'Numbness, tingling, shooting pain, weakness or thinning in hands and feet.' },
  {
    title: 'Arthritis',
    text: 'Small or large joint arthritis: rheumatoid arthritis, ankylosing spondylitis and gout (uric acid).',
  },
  { title: 'Old or New Injuries', text: 'Pain from any recent or old injury to bones or muscles.' },
  { title: 'Body Ache & Weakness', text: 'Pain all over the body, excessive fatigue or weakness (osteoporosis).' },
  { title: 'Deformity & Stiffness', text: 'Crookedness or stiffness in the hands and feet.' },
  { title: 'Spine Surgery Cases', text: 'Advised spine surgery, or no expected relief even after surgery.' },
  { title: 'Leg Pain on Standing', text: 'Sharp leg pain after standing or walking for a long time.' },
  { title: 'Headache & Migraine', text: 'Headache, migraine or pain in the nerves of the face.' },
]

export const doctors = [
  {
    name: 'Dr. Arpit Shukla',
    degree: 'B.P.Th, M.P.Th (Neuro)',
    role: 'Neuro Physiotherapist',
    initials: 'AS',
    highlights: ['Best Physiotherapist Award (2019)', 'Young Physio Award (2022)', '10 professional certifications'],
  },
  {
    name: 'Dr. Anita Shukla',
    degree: 'BPT',
    role: 'Consultant & Manipulative Physiotherapist',
    initials: 'AS',
    highlights: ['Female physiotherapist', 'Manual & manipulative therapy', `Mob: ${siteInfo.phone}`],
  },
]

/*
  Awards & certificates shown in the sliding strip.
  To show a photo of a certificate, import the image above and add `image: myCertImage`.
*/
export const certificates = [
  { title: 'Best Physiotherapist Award', detail: '2019', type: 'award' },
  { title: 'Young Physio Award', detail: '2022', type: 'award' },
  { title: 'Certified Cupping Therapist', detail: 'Level 1 & 2', type: 'cert' },
  { title: 'Certified Dry Needling Therapist', detail: 'Level 1 & 2', type: 'cert' },
  { title: 'Certified Taping Therapist', detail: 'Level 1 & 2', type: 'cert' },
  { title: 'Certified Manual Exercise Therapist', detail: 'Level 1 & 2', type: 'cert' },
  { title: 'Certified I-A-S-T-M Therapist', detail: 'Level 1 & 2', type: 'cert' },
  { title: 'Certified Neuro Development Therapist', detail: 'N-D-T', type: 'cert' },
  { title: 'Certified in Children with Neuro Development Disorder', detail: 'Paediatric Neuro', type: 'cert' },
  { title: 'Certified Vestibular Rehabilitation Therapist', detail: 'Balance & Dizziness', type: 'cert' },
  { title: 'Certified in K-CAT Technique', detail: 'Level 1 & 2', type: 'cert' },
  { title: 'Certified Bone Setting & Chiropractor', detail: 'Chiropractic', type: 'cert' },
]

export const processSteps = [
  {
    number: '01',
    title: 'Assessment',
    image: stepAssessment,
    text: 'Understanding your condition through a detailed consultation and diagnosis.',
  },
  {
    number: '02',
    title: 'Treatment Plan',
    image: stepTreatment,
    text: 'Customized exercises, therapies, and recovery goals built around you.',
  },
  {
    number: '03',
    title: 'Continuous Support',
    image: stepSupport,
    text: 'Regular progress tracking and post-recovery guidance to keep you strong.',
  },
]

/* SAMPLE reviews – replace with real patient reviews before going live */
export const testimonials = [
  {
    name: 'Joseph David',
    role: 'Patient',
    image: patient1,
    quote:
      'After my knee surgery, I could barely walk, and the recovery felt daunting. Within just a few weeks of working with the team, I was not only back on my feet but enjoying life to the fullest again.',
  },
  {
    name: 'Maria Lopez',
    role: 'Patient',
    image: patient2,
    quote:
      'Years of lower back pain had taken over my life. The therapists explained everything clearly and gave me exercises that actually fit my routine. Today I work full days without discomfort.',
  },
  {
    name: 'Arjun Mehta',
    role: 'Patient',
    image: patient3,
    quote:
      'Long hours at the desk left me with constant neck and shoulder pain. Their hands-on sessions and exercise plan made a huge difference in just a month. Professional, friendly, and genuinely caring.',
  },
]

export const footer = {
  about: 'Combining modern physiotherapy techniques with personal care, we help your body heal and thrive.',
  columns: [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'About Us', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Conditions We Treat', href: '#conditions' },
        { label: 'Our Doctors', href: '#doctors' },
        { label: 'Certifications', href: '#certificates' },
      ],
    },
  ],
  socials: [
    { label: 'X', icon: 'x', href: '#' },
    { label: 'LinkedIn', icon: 'linkedin', href: '#' },
    { label: 'Facebook', icon: 'facebook', href: '#' },
    { label: 'Instagram', icon: 'instagram', href: '#' },
  ],
}
