/**
 * Created by Bien on 2017-05-12.
 */
let AWS = require('aws-sdk');
//var AWS = require('aws-sdk/global');  //AWS object without services
//var S3 = require('aws-sdk/clients/s3'); // individual services

console.log('log from aws/s3/uploadprofileimage');

//export let Upload = function() {
//  return 'Hello user!';
//};

let albumBucketName = 'BUCKET_NAME';
let bucketRegion = 'REGION';
let IdentityPoolId = 'IDENTITY_POOL_ID';

AWS.config.update({
    region: bucketRegion,
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: IdentityPoolId
    })
});


export let s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: {Bucket: albumBucketName}
});


export let createAlbum = function(albumName) {
    albumName = albumName.trim();
    if (!albumName) {
        return alert('Album names must contain at least one non-space character.');
    }
    if (albumName.indexOf('/') !== -1) {
        return alert('Album names cannot contain slashes.');
    }
    let albumKey = encodeURIComponent(albumName) + '/';
    s3.headObject({Key: albumKey}, function(err, data) {
        if (!err) {
            return alert('Album already exists.');
        }
        if (err.code !== 'NotFound') {
            return alert('There was an error creating your album: ' + err.message);
        }
        s3.putObject({Key: albumKey}, function(err, data) {
            if (err) {
                return alert('There was an error creating your album: ' + err.message);
            }
            alert('Successfully created album.');
            viewAlbum(albumName);
        });
    });
};

export let viewAlbum = function(albumName) {
    let albumPhotosKey = encodeURIComponent(albumName) + '//';
    s3.listObjects({Prefix: albumPhotosKey}, function(err, data) {
        if (err) {
            return alert('There was an error viewing your album: ' + err.message);
        }
        // `this` references the AWS.Response instance that represents the response
        let href = this.request.httpRequest.endpoint.href;
        let bucketUrl = href + albumBucketName + '/';

        let photos = data.Contents.map(function(photo) {
            let photoKey = photo.Key;
            let photoUrl = bucketUrl + encodeURIComponent(photoKey);
            return getHtml([
                '<span>',
                '<div>',
                '<img style="width:128px;height:128px;" src="' + photoUrl + '"/>',
                '</div>',
                '<div>',
                '<span onclick="deletePhoto(\'' + albumName + "','" + photoKey + '\')">',
                'X',
                '</span>',
                '<span>',
                photoKey.replace(albumPhotosKey, ''),
                '</span>',
                '</div>',
                '<span>',
            ]);
        });
        let message = photos.length ?
            '<p>Click on the X to delete the photo</p>' :
            '<p>You do not have any photos in this album. Please add photos.</p>';
        let htmlTemplate = [
            '<h2>',
            'Album: ' + albumName,
            '</h2>',
            message,
            '<div>',
            getHtml(photos),
            '</div>',
            '<input id="photoupload" type="file" accept="image/*">',
            '<button id="addphoto" onclick="addPhoto(\'' + albumName +'\')">',
            'Add Photo',
            '</button>',
            '<button onclick="listAlbums()">',
            'Back To Albums',
            '</button>',
        ]
        document.getElementById('app').innerHTML = getHtml(htmlTemplate);
    });
}
