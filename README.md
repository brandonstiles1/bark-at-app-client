# Bark-At

![home]

[Bark-At][Bark-at]


## Summary

[Bark-At][Bark-at] is a single-page web application built using React,
using a Redux architecture. Similar to Twitter, Bark-at lets you:

* Create an account
* Log in / Log out
* Add and delete Barks (Tweets)
* Read, edit, and filter transactions
* Add comments to Barks
* Update profile information, including adding a profile picture

## Overall Structure

#### Back end
The app was built using Node.js, using Axios to make API calls to a no-SQL database using Google Firebase, which retrieves user information & Barks.

#### Front end
The front end is built completely in [React.js][React] and JavaScript and utilizes React's [Redux][Redux] architecture. React's virtual DOM allows for lightning-quick rerendering without requiring new pages to be sent from the server. Even modals appear/disappear using React rather than toggling CSS display properties.

#### Libraries

Mintmo uses:
- [React.js][React]
- [Redux][Redux]
- [Firebase][Chart.js]
- [BCrypt](https://github.com/codahale/bcrypt-ruby) for authorization

## Primary Components

#### User Authorization
User authentication is handled in React using a mix of BCrypt & the Firebase Authentication SDK.

![login]



![home]

#### Barks
Barks are the main features of Bark-At; think of them as Tweets. Users can edit, delete, & comment on a Bark, & click through them to learn more about the Bark.


![comments]


![sign-up]

[Bark-at]: https://bark-at-app.netlify.com/
[Redux]: https://redux.js.org/
[react-chartjs]:https://github.com/jhudson8/react-chartjs
[pg_search]:https://github.com/Casecommons/pg_search
[OmniAuth Facebook]:https://github.com/mkdynamic/omniauth-facebook
[React]:https://facebook.github.io/react/
[Flux]:https://facebook.github.io/flux/



[home]: https://firebasestorage.googleapis.com/v0/b/social-media-app-e5895.appspot.com/o/Bark-Feed.png?alt=media&token=085fcab4-f246-40aa-8325-d0515f949f82
[login]: https://firebasestorage.googleapis.com/v0/b/social-media-app-e5895.appspot.com/o/Login.png?alt=media&token=f1b6a96e-b538-4676-b030-44e2a71599f0
[sign-up]: https://firebasestorage.googleapis.com/v0/b/social-media-app-e5895.appspot.com/o/Sign-Up.png?alt=media&token=10aeb1b6-62be-452a-b875-1d8cb2386593
[comments]:https://firebasestorage.googleapis.com/v0/b/social-media-app-e5895.appspot.com/o/Comments.png?alt=media&token=0d94f186-b0ca-49ba-9113-fdab177ebad6