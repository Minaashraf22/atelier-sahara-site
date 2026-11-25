export function validateInquiry(f) {
  const er = {}
  if (!f.get('name').trim()) er.name = 'Please enter your name'
  if (!/^\S+@\S+\.\S+$/.test(f.get('email'))) er.email = 'Enter a valid email'
  if (f.get('message').trim().length < 10) er.message = 'Tell us a little more (10+ characters)'
  return er
}
