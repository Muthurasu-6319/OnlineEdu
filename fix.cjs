const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

const targetStr = `) : currentHash.startsWith('#jain') ? (
          <>
            <JainHero onEnquiryClick={handleEnquiryClick} />
            <JainAbout />
            <JainWhyChoose />
            <AboutPhilosophy />
            <AboutPartnerships />
          </>`;

const replacement = `) : currentHash.startsWith('#jain') ? (
          <>
            <JainHero onEnquiryClick={handleEnquiryClick} />
            <JainAbout />
            <JainWhyChoose />
            <ManipalPrograms  onEnquiryClick={handleEnquiryClick} universityName="Jain University" />
            <ManipalFaq />
            <JainHiringPartners />
            <VITContact />
          </>
        ) : currentHash.startsWith('#board') ? (
          <>
            <BoardHero />
            <BoardAbout />
            <BoardCourses />
            <BoardPlacement />
            <BoardIntro />
            <BoardDetails />
            <WhyChooseUs />
            <BoardSteps />
            <BoardOutro onEnquiryClick={handleEnquiryClick} />
          </>
        ) : currentHash.startsWith('#nios') ? (
          <>
            <BoardHero />
            <BoardMIOS />
            <BoardOutro onEnquiryClick={handleEnquiryClick} />
          </>
        ) : currentHash.startsWith('#about') ? (
          <>
            <AboutHero onEnquiryClick={handleEnquiryClick} />
            <AboutAcademy />
            <AboutPhilosophy />
            <AboutPartnerships />
          </>`;

if (code.includes(targetStr)) {
  code = code.replace(targetStr, replacement);
  fs.writeFileSync('src/App.jsx', code);
  console.log('Fixed successfully');
} else {
  console.log('Target string not found');
}
