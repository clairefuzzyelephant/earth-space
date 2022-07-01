# earth-space

A website for collecting submissions for the HUMANS (Humanity United with MIT Art and Nanotechnology in Space) project led by Maya Nasr and Lihui (Lydia) Zhang at MIT AeroAstro.

Website deployed here: https://humans.mit.edu/

Built using React.js with Node.js backend.

## To start development

```
$ git clone https://github.com/clairefuzzyelephant/earth-space.git
$ cd earth-space
```
Note: This website currently uses node 16.12.0 and will break if you use node 17+.
Make sure you are running node 16 and/or change your development environment to use node 16.
Install the npm dependencies.
```
$ npm install
```

In your folder's root directory, add a .env file with the following environment variables and their values:
```
ATLAS_SRV
SESSION_SECRET
```
Now you should be able to connect to the relevant databases. Start the server in a new terminal tab in the same directory:
```
npm start
```
And in a separate terminal tab in the same directory, you can run the hotloader for live development updates:
```
npm run hotloader
```
And you should be good to go! 

## To deploy changes

Currently the Heroku is set up to auto-deploy changes pushed to the Github main branch. 
```
$ git add -A
$ git commit -m "your commit message"
$ git push
```
However, if this doesn't work (sometimes Github disconnects from Heroku), you can manually deploy on the Heroku deploy dashboard, after your changes are pushed.



World map on home page taken from https://www.npmjs.com/package/react-world-map.
Recording audio module taken from https://www.npmjs.com/package/recordrtc.

