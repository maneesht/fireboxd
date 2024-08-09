const { getDataConnect, queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'fireboxd',
  service: 'fireboxd',
  location: 'us-west1'
};
exports.connectorConfig = connectorConfig;

function addMoviesRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'addMovies', inputVars);
}
exports.addMoviesRef = addMoviesRef;
exports.addMovies = function addMovies(dcOrVars, vars) {
  return executeMutation(addMoviesRef(dcOrVars, vars));
};

function updateRatingRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'updateRating', inputVars);
}
exports.updateRatingRef = updateRatingRef;
exports.updateRating = function updateRating(dcOrVars, vars) {
  return executeMutation(updateRatingRef(dcOrVars, vars));
};

function createRatingRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'createRating', inputVars);
}
exports.createRatingRef = createRatingRef;
exports.createRating = function createRating(dcOrVars, vars) {
  return executeMutation(createRatingRef(dcOrVars, vars));
};

function listMyReviewsRef(dc) {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'ListMyReviews');
}
exports.listMyReviewsRef = listMyReviewsRef;
exports.listMyReviews = function listMyReviews(dc) {
  return executeQuery(listMyReviewsRef(dc));
};

function listAllMoviesRef(dc) {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'ListAllMovies');
}
exports.listAllMoviesRef = listAllMoviesRef;
exports.listAllMovies = function listAllMovies(dc) {
  return executeQuery(listAllMoviesRef(dc));
};

function currentMovieRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'CurrentMovie', inputVars);
}
exports.currentMovieRef = currentMovieRef;
exports.currentMovie = function currentMovie(dcOrVars, vars) {
  return executeQuery(currentMovieRef(dcOrVars, vars));
};

