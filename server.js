// === Include the Necessary Externals === //
var express     =  require( 'express' );
var http        =  require( 'http' );
var bodyParser  =  require( 'body-parser' );

// === Prepare the App === //
var app  =  express( );
app.use(
	bodyParser.text(
		{
			type:	function( req ) { return 'text'; }
		}
	));
	
// === Post Request to '/post' === //
app.post(	'/post',
			function( req , res )
			{
				// Log the Request Body
				console.log( req.body );
				
				// Response Status
				res  =  res.status( 200 );
				
				// Verify that the Request has a content-type header
				if ( req.get( 'Content-Type' ) ) 
				{
					// Log the Request Content-Type
					console.log( 'Content-Type: ' + req.get( 'Content-Type' ) );
					
					// Response Type
					res  =  res.type( req.get( 'Content-Type' ) );
				}
				
				// Send the Response to the Client (Response Echoes Request)
				res.send( req.body );
			});
			
// === Create the Server and Begin Listening For Requests on Port === //
http.createServer( app ).listen( 8080 );