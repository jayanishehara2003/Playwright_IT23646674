const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    {
      tcId: 'Pos_Fun_0001',
      name: 'Convert a short daily greeting phrase',
      input: 'oyaata kohomadha?',
      expected: 'ඔයාට කොහොමද?',
      category: 'Greeting / request / response',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0002',
      name: 'Simple Sentence Request',
      input: 'Mata kathura tikak oona.',
      expected: 'මට කතුර ටිකක් ඕන.',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0003',
      name: 'Convert phrase with kinship term',
      input: 'Ammaa gedhara enavaa.',
      expected: 'අම්මා මම ගෙදර එනවා',
      category: 'Daily language usage; Kinship terms / Address',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0004',
      name: 'Convert simple future plan',
      input: 'Mama heta maathara yanavaa',
      expected: 'මම හෙට මාතර යනවා',
      category: 'Daily language usage; Future tense / Location',
      grammar: 'Future tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0005',
      name: 'Convert expression of ability',
      input: 'Mata eka karanna puluvan',
      expected: 'මට එක කරන්න පුලුවන්',
      category: 'Daily language usage; Expression of ability',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0006',
      name: 'Convert sentence with number & item',
      input: 'Mama  malu thunak gaththaa',
      expected: 'මම  මලු තුනක් ගත්තා',
      category: 'Daily language usage',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0007',
      name: 'Past Tense',
      input: 'Api giya maasee gamata  giyaa.',
      expected: 'අපි ගිය මාසේ ගමට  ගියා.',
      category: 'Daily language usage',
      grammar: 'Past tense',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0008',
      name: 'Present Tense',
      input: 'Eyaa paththara balanavaa.',
      expected: 'එයා පත්තර බලනවා.',
      category: 'Daily language usage',
      grammar: 'Present tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0009',
      name: 'Future Tense',
      input: 'Mama heta eheta ennam.',
      expected: 'මම හෙට එහෙට එන්නම්.',
      category: 'Daily language usage',
      grammar: 'Future tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0010',
      name: 'Negation',
      input: 'Mata salli na.',
      expected: 'මට සල්ලි න.',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0011',
      name: 'Singular Pronoun',
      input: 'Mata pothak thiyenava.',
      expected: 'මට පොතක් තියෙනව.',
      category: 'Daily language usage',
      grammar: 'Present tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0012',
      name: 'Plural Pronoun',
      input: 'Mata poth godak thiyenavaa.',
      expected: 'මට පොත් ගොඩක් තියෙනවා.',
      category: 'Daily language usage',
      grammar: 'Plural form',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0013',
      name: 'Polite Request',
      input: 'puluvannam mata eka karanna.',
      expected: 'පුලුවන්නම් මට එක කරන්න.',
      category: 'Greeting/request/response',
      grammar: 'Imperative (command)',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0014',
      name: 'Informal Address',
      input: 'Machan yamu?',
      expected: 'මචන් යමු?',
      category: 'Slang/informal language',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0015',
      name: 'Repeated Words',
      input: 'Yanna yanna.',
      expected: 'යන්න යන්න.',
      category: 'Word combination/phrase pattern',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0016',
      name: 'Mixed English (Email)',
      input: 'Mata email ekak ava.',
      expected: 'මට email එකක් ආව.',
      category: 'Mixed Singlish + English',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0017',
      name: 'English Abbreviation (PC)',
      input: 'Oyaa PC eka on karanna.',
      expected: 'ඔයා PC එක on කරන්න.',
      category: 'Names/places/common English words',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0018',
      name: 'Currency Format',
      input: 'Rs. 500 k gaththaa.',
      expected: 'Rs. 500 ක් ගත්තා.',
      category: 'Punctuation/numbers',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0019',
      name: 'Time Format',
      input: '10.30 AM ta ennam',
      expected: '10.30 AM ට එන්නම්',
      category: 'Punctuation/numbers',
      grammar: 'Future tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0020',
      name: 'Detailed Routine Statement',
      input: 'Eyaa udheema nidhaagena avadhi vela passe hodhatama ready vela school giyaa.',
      expected: 'එයා උදේම නිදාගෙන අවදි වෙල පස්සෙ හොදටම ready වෙල school ගියා.',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0021',
      name: 'Extended Daily Activity Description',
      input: 'Mama adha office ekata yanakota bus eke hari loku crowd ekak thibbaa kiyala hodhatama theeruNaa.',
      expected: 'මම අද office එකට යනකොට bus eke හරි ලොකු crowd එකක් තිබ්බා කියල හොදටම තේරුණා.',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0022',
      name: 'Complex Sentence',
      input: 'Oyaa enavanam mama yannee na.',
      expected: 'ඔයා එනවනම් මම යන්නේ න.',
      category: 'Daily language usage',
      grammar: 'Complex sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0023',
      name: 'Long Paragraph Input',
      input: 'Sri Lankawe ithihasaya bohomayak purana wu ekaki. Eya wagema mehi bohomayak kavi saha kala nirmana daknata labe. Sigiriya, Dambulla wani sthana lowa pura prasidda vee atha. Touristsla mehi paminenne meva balanna haa mehi thibena sundarathwaya vindinnata ya. Apith ewa raka ganna oni. Minissu vashayen api parisaraya surakiya yuthuya. Gaskolan wava gena ewaa araksha kirima ape yuthukamak ve.',
      expected: 'ශ්‍රී ලංකාවේ ඉතිහාසය බොහොමයක් පුරාණ වූ එකකි. එය වගේම මෙහි බොහොමයක් කවි සහ කලා නිර්මාණ දක්නට ලැබේ. සීගිරිය, දඹුල්ල වැනි ස්ථාන ලොව පුරා ප්‍රසිද්ධ වී ඇත. Touristsලා මෙහි පැමිණෙන්නේ මේවා බලන්න හා මෙහි තිබෙන සුන්දරත්වය විඳින්නට ය. අපිත් ඒවා රැක ගන්න ඕනි. මිනිස්සු වශයෙන් අපි පරිසරය සුරැකිය යුතුය. ගස්කොළන් වවා ගෙන ඒවා ආරක්ෂා කිරීම අපේ යුතුකමක් වේ.',
      category: 'Daily language usage',
      grammar: 'Compound paragraph',
      length: 'L'
    },
    {
      tcId: 'Pos_Fun_0024',
      name: 'Compound Sentence',
      input: 'Mama  karanavaa namuth mata mahansiyi.',
      expected: 'මම  කරනවා නමුත් මට මහන්සියි.',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    }
  ],

  negative: [
    {
      tcId: 'Neg_Fun_0001',
      name: 'Joined Words Stress',
      input: 'mamawadakaranawa',
      expected: 'මම වැඩ කරනවා',
      category: 'Typographical error handling',
      grammar: 'Present tense',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_0002',
      name: 'Alphanumeric String',
      input: 'User007',
      expected: 'User007',
      category: 'Typographical error handling',
      grammar: 'Alphanumeric',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0003',
      name: 'Elongated Vowels',
      input: 'Gedaraaaa',
      expected: 'ගෙදරාආආ',
      category: 'Typographical error handling',
      grammar: 'Word',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0004',
      name: 'URL Handling',
      input: 'www.google.lk',
      expected: 'www.google.lk',
      category: 'Typographical error handling',
      grammar: 'URL',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0005',
      name: 'HTML/Code Syntax',
      input: '<h1>Hello</h1>',
      expected: '<h1>Hello</h1>',
      category: 'Typographical error handling',
      grammar: 'HTML',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0006',
      name: 'Mixed Capitalization',
      input: 'SiNgLiSh',
      expected: 'සිංග්ලිෂ්',
      category: 'Typographical error handling',
      grammar: 'Word',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0007',
      name: 'Symbol Injection',
      input: 'B@th',
      expected: 'බ@ත්',
      category: 'Typographical error handling',
      grammar: 'Word',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0008',
      name: 'Gibberish Input',
      input: 'qzxy',
      expected: 'qzxy',
      category: 'Typographical error handling',
      grammar: 'Non-phonetic',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0009',
      name: 'Slang Term',
      input: 'Supiri dial ekak.',
      expected: 'සුපිරි ඩයල් එකක්.',
      category: 'Slang/informal language',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0010',
      name: 'Ambiguous Typo',
      input: 'nana (for naana)',
      expected: 'නෑනා',
      category: 'Typographical error handling',
      grammar: 'Word',
      length: 'S'
    }
  ],

  ui: {
    tcId: 'Pos_UI_0001',
    name: 'Clear Input Behavior',
    input: 'Type text then clear',
    partialInput: 'Suba sandhyawak!',
    expectedFull: 'සුබ සන්ධ්‍යාවක්!',
    expectedCleared: '',
    category: 'Usability flow',
    grammar: 'Greeting phrase',
    length: 'S'
  }
};
// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
