// Meteor.methods({
//
//
//     sendEmail: function (userId, email) {
//         if (this.userId == userId) {
//             Email.send(email);
//         }
//     },
//
//
//     sendRegEmail: function (profile) {
//         const email = {
//             to: profile.email,
//             from: 'Digitalwave Tracking <trackingadmin@digitalwave.hu>',
//             replyTo: 'trackingadmin@digitalwave.hu',
//             subject: "Tracking belépés",
//             html:
//             `<p>Tisztelt ${profile.__nick}!</p>
//             <p>Elkészült a Tracking fiókja, az alábbi adatokkal beléphet:</p>
//             <p>
//               <b>
//                 E-mail cím:
//               </b>
//               ${profile.email}
//             </p>
//             <p>
//               <b>
//                 Jelszó:
//               </b>
//               ${profile.password}
//             </p>
//             <p><a href="https://tracking.digitalwave.hu">https://tracking.digitalwave.hu</a></p>`
//         };
//
//         return Email.send(email);
//     },
//
//
//     sendPassEmail: function (address, pass) {
//         const email = {
//             to: address,
//             from: 'Digitalwave Tracking <trackingadmin@digitalwave.hu>',
//             replyTo: 'trackingadmin@digitalwave.hu',
//             subject: "Tracking jelszó változás",
//             html:
//             `<p>Tisztelt felhasználó!</p>
//             <p>Megváltozott a Tracking jelszava:</p>
//             <p>
//               <b>
//                 Új jelszó:
//               </b>
//               ${pass}
//             </p>
//             <p><a href="https://tracking.digitalwave.hu">https://tracking.digitalwave.hu</a></p>`
//         };
//
//         return Email.send(email);
//     },
//
//
// });
