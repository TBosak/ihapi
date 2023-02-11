# ihapi

Image Processing API using Jimp and Express

This API is built using the Express framework for Node.js and the Jimp image processing library. The API receives an image file in a JSON request, performs a set of operations on the image based on the parameters in the request, and returns the processed image in Base64 format.

## The API supports the following image processing operations:

Resize

Autocrop

Greyscale

Blur

Posterize

Sepia

Invert

Brightness

Contrast

Normalize

Gaussian

Flip

Mirror

Each of these operations is performed based on the parameters included in the JSON request.

## Request Format

The API accepts POST requests at the root endpoint (/) with a JSON body that contains the following fields:

image (required): The image url.

resize (optional): An array containing two values specifying the width and height to resize the image to. If only one value is provided, the other value will be automatically calculated to preserve the aspect ratio.

autocrop (optional): A Boolean value indicating whether to perform an auto crop on the image.

greyscale (optional): A Boolean value indicating whether to convert the image to greyscale.

blur (optional): An integer value indicating the strength of the blur to be applied to the image.

posterize (optional): An integer value indicating the strength of the posterization to be applied to the image.

sepia (optional): A Boolean value indicating whether to apply a sepia filter to the image.

invert (optional): A Boolean value indicating whether to invert the image colors.

brightness (optional): An integer value indicating the strength of the brightness correction to be applied to the image.

contrast (optional): An integer value indicating the strength of the contrast correction to be applied to the image.

normalize (optional): A Boolean value indicating whether to perform a normalization on the image.

gaussian (optional): An integer value indicating the strength of the Gaussian correction to be applied to the image.

flip (optional): An array containing two Boolean values indicating whether to flip the image horizontally and vertically, respectively.

mirror (optional): An array containing two Boolean values indicating whether to mirror the image horizontally and vertically, respectively.


## Response Format
The API returns the processed image in Base64 format, embedded in an HTML img tag.

This API provides a simple and convenient way to perform a range of image processing operations on an image file. The API is easy to use and flexible, allowing users to specify exactly which operations they want to perform and how they want to perform them.
