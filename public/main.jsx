//all rendering takes place here
var React = require('react');
var ReactDOM = require('react-dom');

console.log("FROM JSX");


var CARDS = [
    { name: 'Backbone.js', img: './imgs/example.png', tags: ["Backbone.js"], service_type:"HIV/AIDS Services", services_offered:"-Outreach\n-Free anonymous Rapid HIV and Hepatitis C testing\n-HIV prevention and medical services\n-Hepatitis testing and vaccination \n-HIV and Substance Use Disorder workshops\n-Screening and treatment for mental health and substance use disorders\n-Information and referrals\n\n*Our program is designed to meet your individual needs!\n\n**For more information on how YOU can improve your health, call (313) 825-2416 or (313) 347-2070 today!" },
    { name: 'AngularJS', img: './imgs/example.png', tags: ["Backbone.js"], service_type:"Advocacy", services_offered:"Promote civic engagement and advocacy initiatives that support equality and social justice for all people, especially those who identify at LGBTQ. The program achieves this through collaborative efforts that disseminate information, build leadership, and empower individuals to become active in the movement to improve the quality of life for LGBTQ families and friends. Below are issues that affect the LGBTQ community.\n\n-Affirmations Faith Alliance (AFA): an inter-faith initiative to build bridges between the LGBT and faith communities in Southeast Michigan. Program identifies welcoming and affirming congregations and faith leaders. \n-Older Adult Coalition: the LGBT Older Adult Coalition is a collaboration of people and organizations in Southeastern Michigan who are working to establish effective programs and services for lesbian, gay, bisexual, and transgender older adults.\n-Allies: Affirmations is working to amass a base of ally supporters who are willing to speak up and out for the LGBTQ community, and to participate in life and activities both at the Center and within the larger LGBTQ community. Allies have continuously played an active role in supporting Affirmations mission, many continuing to serve in leadership roles as board members, staff and volunteers. \n-Anti-bullying: LGBTQ youth suffer from disproportionately high rates of suicide and homelessness. Bullying is a leading factor resulting in limiting the full potential of all youth. Currently there are no protections for LGBTQ youth in Michigan schools. \n-Get Out The Vote: encourage and promote the right of citizens to participate in the democratic process. The center provides resources for voter registration.\n-LGBT-Discrimination: Michigan currently has a ban on same-sex marriage. Help us identify people who are in favor of marriage equality. Come join us at Affirmations Action Nights, every Tuesday from 6-9 pm, to let citizens and representatives know that Michigan is an equal opportunity state.\n-Marriage Equality: All committed couples should have the freedom to marry in the state that they call home, and that includes same-sex couples in Michigan. The landscape for marriage is shifting rapidly.\n-Domestic Partnership Registry: this is a direct response to the Michigan Court of Appeals ruling barring public employers fro extending same-sex domestic partnership benefits.\n-MPIPP: The Michigan Project for Informed Public Policy (MPIPP) is an initiative of the Michigan Psychological Association Foundation to improve the lives of those who are lesbian, gay, bisexual, or transgender by using psychological research to inform public policy.\n-Know Us Project: MPIPP also has developed a research-based educational project, the Know Us Project that shows LGBT people (and their allies) how to talk to others about the personal impact of social stigma and discrimination. The program uses experienced mental health professionals who can help participants recognize possible negative feelings and emotions that may be experienced during or after KUP conversations and learn to address them though self-care, stress management, and professional help if indicated." },
    { name: 'jQuery', img: './imgs/example.png', tags: ["Backbone.js"], service_type:"Counseling and Support Groups", services_offered:"-Various support groups for the LGBTQ and HIV/AIDS positive communities\n-Affirmations partners with Oakland County Health Division, AIDS Partnership Michigan and Michigan AIDS Coalition to provide free and confidential HIV and STD testing. Free condoms, lube and sexual health information are also available.\n-Recreational activities for all ages\n-Advocacy\n" },
    { name: 'Test', img: './imgs/example.png', tags: ["Backbone.js"], service_type:"HIV/AIDS Services", services_offered:"-Various support groups for the LGBTQ and HIV/AIDS positive communities\n-Affirmations partners with Oakland County Health Division, AIDS Partnership Michigan and Michigan AIDS Coalition to provide free and confidential HIV and STD testing. Free condoms, lube and sexual health information are also available.\n-Recreational activities for all ages\n-Advocacy\n"},
    { name: 'Test2.js', img: './imgs/example.png', tags: ["Backbone.js"], service_type:"HIV/AIDS Services", services_offered:"-Various support groups for the LGBTQ and HIV/AIDS positive communities\n-Affirmations partners with Oakland County Health Division, AIDS Partnership Michigan and Michigan AIDS Coalition to provide free and confidential HIV and STD testing. Free condoms, lube and sexual health information are also available.\n-Recreational activities for all ages\n-Advocacy\n"},
    { name: 'Test4', img: './imgs/example.png', tags: ["Backbone.js"], service_type:"HIV/AIDS Services", services_offered:"-Various support groups for the LGBTQ and HIV/AIDS positive communities\n-Affirmations partners with Oakland County Health Division, AIDS Partnership Michigan and Michigan AIDS Coalition to provide free and confidential HIV and STD testing. Free condoms, lube and sexual health information are also available.\n-Recreational activities for all ages\n-Advocacy\n"},
    { name: 'Testing', img: './imgs/example.png', tags: ["Backbone.js"], service_type:"Counseling and Support Groups", services_offered:"-Various support groups for the LGBTQ and HIV/AIDS positive communities\n-Affirmations partners with Oakland County Health Division, AIDS Partnership Michigan and Michigan AIDS Coalition to provide free and confidential HIV and STD testing. Free condoms, lube and sexual health information are also available.\n-Recreational activities for all ages\n-Advocacy\n"},
    { name: 'Teest', img: './imgs/example.png',  tags: ["Backbone.js"], service_type:"Counseling and Support Groups", services_offered:"-Various support groups for the LGBTQ and HIV/AIDS positive communities\n-Affirmations partners with Oakland County Health Division, AIDS Partnership Michigan and Michigan AIDS Coalition to provide free and confidential HIV and STD testing. Free condoms, lube and sexual health information are also available.\n-Recreational activities for all ages\n-Advocacy\n"},
    { name: 'LIVWEL.js', img: './imgs/example.png', tags: ["Backbone.js"], service_type:"Counseling and Support Groups", services_offered:"-Various support groups for the LGBTQ and HIV/AIDS positive communities\n-Affirmations partners with Oakland County Health Division, AIDS Partnership Michigan and Michigan AIDS Coalition to provide free and confidential HIV and STD testing. Free condoms, lube and sexual health information are also available.\n-Recreational activities for all ages\n-Advocacy\n"},
    { name: 'AIDS', img: './imgs/example.png',  tags: ["Backbone.js"], service_type:"Counseling and Support Groups", services_offered:"-Various support groups for the LGBTQ and HIV/AIDS positive communities\n-Affirmations partners with Oakland County Health Division, AIDS Partnership Michigan and Michigan AIDS Coalition to provide free and confidential HIV and STD testing. Free condoms, lube and sexual health information are also available.\n-Recreational activities for all ages\n-Advocacy\n"},
    { name: 'CLEAR', img: './imgs/example.png', tags: ["Backbone.js"], service_type:"Counseling and Support Groups", services_offered:"-Various support groups for the LGBTQ and HIV/AIDS positive communities\n-Affirmations partners with Oakland County Health Division, AIDS Partnership Michigan and Michigan AIDS Coalition to provide free and confidential HIV and STD testing. Free condoms, lube and sexual health information are also available.\n-Recreational activities for all ages\n-Advocacy\n"},
    { name: 'Testingggg', img: './imgs/example.png', tags: ["Backbone.js"], service_type:"Advocacy", services_offered:"-Various support groups for the LGBTQ and HIV/AIDS positive communities\n-Affirmations partners with Oakland County Health Division, AIDS Partnership Michigan and Michigan AIDS Coalition to provide free and confidential HIV and STD testing. Free condoms, lube and sexual health information are also available.\n-Recreational activities for all ages\n-Advocacy\n"},
    { name: 'Week.js', img: './imgs/example.png', tags: ["Backbone.js"], service_type:"Advocacy", services_offered:"-Various support groups for the LGBTQ and HIV/AIDS positive communities\n-Affirmations partners with Oakland County Health Division, AIDS Partnership Michigan and Michigan AIDS Coalition to provide free and confidential HIV and STD testing. Free condoms, lube and sexual health information are also available.\n-Recreational activities for all ages\n-Advocacy\n"},
    { name: 'Mark', img: './imgs/example.png', tags: ["Backbone.js"], service_type:"Advocacy", services_offered:"-Various support groups for the LGBTQ and HIV/AIDS positive communities\n-Affirmations partners with Oakland County Health Division, AIDS Partnership Michigan and Michigan AIDS Coalition to provide free and confidential HIV and STD testing. Free condoms, lube and sexual health information are also available.\n-Recreational activities for all ages\n-Advocacy\n"},
    { name: 'Tony', img: './imgs/example.png', tags: ["Backbone.js"], service_type:"Advocacy", services_offered:"-Various support groups for the LGBTQ and HIV/AIDS positive communities\n-Affirmations partners with Oakland County Health Division, AIDS Partnership Michigan and Michigan AIDS Coalition to provide free and confidential HIV and STD testing. Free condoms, lube and sexual health information are also available.\n-Recreational activities for all ages\n-Advocacy\n"},
    { name: 'Jake', img: './imgs/example.png', tags: ["Backbone.js"], service_type:"Advocacy", services_offered:"Medical programs--\n\n-Health & Wellness Network: Consists of health care providers in southeastern Michigan who have signed our Community Standards of Practice, which asserts that their health care services are inclusive of the diversity found in LGBT communities.\n-SOGI Health Equity Council of SE Michigan: A strategic initiative coordinated by Affirmations to reduce health disparities related to sexual orientation and gender identity."},
    { name: 'React', img: './imgs/example.png', tags: ["Backbone.js"], service_type:"Advocacy", services_offered:"Medical programs--\n\n-Health & Wellness Network: Consists of health care providers in southeastern Michigan who have signed our Community Standards of Practice, which asserts that their health care services are inclusive of the diversity found in LGBT communities.\n-SOGI Health Equity Council of SE Michigan: A strategic initiative coordinated by Affirmations to reduce health disparities related to sexual orientation and gender identity."}
];
console.log(CARDS[0].tags);

//var Test = require('./components/test.jsx');
var Cards = require('./components/cards.jsx');

//ReactDOM.render(<Test />, test);
ReactDOM.render(<Cards source="http://localhost:9001/cards"/>, cards);