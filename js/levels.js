var levels = [
  {
    name: 'justify-content 1',
    instructions: {
      'en': '<p>Welcome to CSS Hero, a game where you help the birds by writing CSS code! Guide this bird to its house on the right by using the <code>justify-content</code> property, which aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul><p>For example, <code>justify-content: flex-end;</code> will move the bird to the right. </p>',
      'ar': '<p>اهلا بك في CSS Hero, ساعد الطيور عن طريق كتابة كود CSS! انقل العصفور الى بيته الذي على اليمين باستخدام خاصية <code>justify-content</code> والذي يحاذي العناصر افقيا وتقبل القيم التالية:</p><ul><li><code>flex-start</code>: محاذاة العناصر الى الجانب الأيسر من الحاوية.</li><li><code>flex-end</code>: محاذاة العناصر الى الجانب الايمن من الحاوية.</li><li><code>center</code>: محاذاة العناصر الى وسط الحاوية.</li><li><code>space-between</code>: عرض العناصر بتباعد متساوٍ بينهم.</li><li><code>space-around</code>: عرض العناصر بتباعد متساو حولهم.</li></ul><p>على سبيل المثال, <code>justify-content: flex-end;</code> ستنقل العصفور الى اليمين. </p>',
    },
    board: 'g',
    style: {'justify-content': 'flex-end'},
    before: "#sky {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'justify-content 2',
    instructions: {
      'en': '<p>Use <code>justify-content</code> again to help these birds get to their houses. Remember that this CSS property aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul>',
      'ar': '<p>استخدم <code>justify-content</code> لمساعدة الطيور للعودة الى منازلها. تذكر ان خاصية الـCSS هذه تحاذي العناصر افقيا و تقبل هذه القيم:</p><ul><li><code>flex-start</code>: محاذاة العناصر الى الجانب الأيسر من الحاوية.</li><li><code>flex-end</code>: محاذاة العناصر الى الجانب الايمن من الحاوية.</li><li><code>center</code>: محاذاة العناصر الى وسط الحاوية.</li><li><code>space-between</code>: عرض العناصر بتباعد متساوٍ بينهم.</li><li><code>space-around</code>: عرض العناصر بتباعد متساوٍ بينهم.</li></ul>',
    },
    board: 'gy',
    style: {'justify-content': 'center'},
    before: "#sky {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'justify-content 3',
    instructions: {
      'en': '<p>Help all three birds find their houses just by using <code>justify-content</code>. This time, the houses have lots of space all around them.</p><p>If you find yourself forgetting the possible values for a property, you can hover over the property name to view them. Try hovering over <code>justify-content</code>.</p>',
      'ar': '<p>ساعد الطيور الثلاثة بالعودة الى منازلها فقط باستخدام <code>justify-content</code>. هذه المرة, يوجد بين المنازل فراغات كثيرة.</p><p>اذا كنت قد نسيت القيم الممكنة للخاصية, يمكنك المرور فوقها بالمؤشر لرؤيتها. جرب المرور فوق <code>justify-content</code>.</p>',
    },
    board: 'gyr',
    style: {'justify-content': 'space-around'},
    before: "#sky {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'justify-content 4',
    instructions: {
      'en': '<p>Now the houses on the edges have drifted further due to some wind storm, increasing the space between them. Use <code>justify-content</code>. This time, the houses have equal spacing between them.</p>',
      'ar': '<p>انجرفت المنازل التي بالاطراف بسبب الرياح و أصبحت أبعد , وازدادت الفراغات بينها. استخدم <code>justify-content</code>. هذه المرة, المنازل بينها فراغات متساوية.</p>',
    },
    board: 'gyr',
    style: {'justify-content': 'space-between'},
    before: "#sky {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'align-items 1',
    instructions: {
      'en': '<p>Now use <code>align-items</code> to help the birds get to the bottom. This CSS property aligns items vertically and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the top of the container.</li><li><code>flex-end</code>: Items align to the bottom of the container.</li><li><code>center</code>: Items align at the vertical center of the container.</li><li><code>baseline</code>: Items display at the baseline of the container.</li><li><code>stretch</code>: Items are stretched to fit the container.</li></ul>',
      'ar': '<p>الان استخدم <code>align-items</code> لمساعدة الطيور للذهاب الى الاسفل. هذه الخاصية في CSS تحاذي العناصر عاموديا وتقبل القيم التالية:</p><ul><li><code>flex-start</code>: محاذاة العناصر الى اعلى الحاوية.</li><li><code>flex-end</code>: محاذاة العناصر الى اسفل الحاوية.</li><li><code>center</code>: محاذاة العناصر الى وسط الحاوية عاموديا.</li><li><code>baseline</code>: محاذاة العناصر على نفس الخط (Baseline) للحاوية.</li><li><code>stretch</code>: تمدد العناصر عاموديا لتملئ الحاوية.</li></ul>',
    },
    board: 'gyr',
    style: {'align-items': 'flex-end'},
    before: "#sky {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'align-items 2',
    instructions: {
      'en': '<p>Lead the bird to the center using a combination of <code>justify-content</code> and <code>align-items</code>.</p>',
      'ar': '<p>وجه العصفور الى الوسط باستخدام كل من <code>justify-content</code> و <code>align-items</code>.</p>',
    },
    board: 'g',
    style: {'justify-content': 'center', 'align-items': 'center'},
    before: "#sky {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'align-items 3',
    instructions: {
      'en': '<p>The birds need to cross to the bottom again, this time for some houses with plenty of space around them. Using a combination of <code>justify-content</code> and <code>align-items</code>.</p>',
      'ar': '<p>تحتاج الطيور للعبور مرة اخرى إلى الأسفل , هناك فراغات كثيرة حول المنازل. استخدم كل من <code>justify-content</code> و <code>align-items</code>.</p>',
    },
    board: 'gyr',
    style: {'justify-content': 'space-around', 'align-items': 'flex-end'},
    before: "#sky {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 1',
    instructions: {
      'en': '<p>The birds need to get in the same order as their houses using <code>flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:</p><ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>',
      'ar': '<p>الطيور تريد الوصول الى منازلها بالترتيب باستخدام <code>flex-direction</code>. تحدد خاصية الـCSS هذه اتجاه العناصر الموضوعة في الحاوية, وتقبل هذه القيم:</p><ul><li><code>row</code>: يتم وضع العناصر بنفس اتجاه النص.</li><li><code>row-reverse</code>: يتم وضع العناصر بعكس اتجاه النص.</li><li><code>column</code>: يتم وضع العناصر من أعلى إلى أسفل.</li><li><code>column-reverse</code>: يتم وضع العناصر من أسفل إلى أعلى.</li></ul>',
    },
    board: 'gyr',
    style: {'flex-direction': 'row-reverse'},
    before: "#sky {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 2',
    instructions: {
      'en': '<p>Help the birds find their column of houses using <code>flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:</p><ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>',
      'ar': '<p>ساعد الطيور لإيجاد المنازل المرتبة عاموديًا باستخدام <code>flex-direction</code>. تحدد خاصية الـCSS هذه اتجاه العناصر الموضوعة في الحاوية, وتقبل هذه القيم:</p><ul><li><code>row</code>: يتم وضع العناصر بنفس اتجاه النص.</li><li><code>row-reverse</code>: يتم وضع العناصر بعكس اتجاه النص.</li><li><code>column</code>: يتم وضع العناصر من أعلى إلى أسفل.</li><li><code>column-reverse</code>: يتم وضع العناصر من أسفل إلى أعلى.</li></ul>',
    },
    board: 'gyr',
    style: {'flex-direction': 'column'},
    before: "#sky {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 3',
    instructions: {
      'en': '<p>Help the birds get to their own houses. Although they seem close, it will take both <code>flex-direction</code> and <code>justify-content</code> to get them there.</p><p>Notice that when you set the direction to a reversed row or column, start and end are also reversed.</p>',
      'ar': '<p>ساعد الطيور بالوصول الى منازلها باستخدام <code>flex-direction</code> و <code>justify-content</code>.</p><p>لاحظ انه عند استخدام الاتجاه العامودي, <code>justify-content</code> تتغير الى عامودي و <code>align-items</code> تتغير الى افقي.</p>',
    },
    board: 'gyr',
    style: {'flex-direction': 'column', 'justify-content': 'flex-end'},
    before: "#sky {\n  display: flex;\n",
    after: "}"
  }
];

var levelWin = {
  name: 'win',
  instructions: {
    'en': '<p>You win! you were able to help all of the birds get to their houses. Just look how happy they are!</p>',
    'ar': '<p>لقد فزت! لقد استطعت مساعدة جميع الطيور للوصول الى منازلها. انظر كم هم سعداء!</p>',
  },
  board: 'gyrgyrgyrgyrgyrgyrgyrgyrg',
  classes: {'#sky, #background': 'wrap'},
  style: {},
  before: "#sky {\n  display: flex;\n",
  after: "}"
};
