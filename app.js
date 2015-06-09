var cardTracker = new CardTracker("o365-progressTrackerContainer","myNavBar");
$(document).ready(function() {
    cardTracker.init(1.0);
});
        
$(document).scroll(function() {
    cardTracker.updateScroll();
});	
	
var client;
		
function openAddin(URL) {
    window.open(URL, "_blank");
    cardTracker.removeBlockingCard();
}
		
var taskPane = {
    'title': 'Task Pane',
    'img': {'excel': 'exceltaskpane.PNG', 'word': 'wordtaskpane.PNG', 'powerpoint':'powerpointtaskpane.PNG'},
    'text': 'A Task Pane Add-in appears next to the document.',
    'overlaytop': {'excel': 'openAddin("http://aka.ms/Fb7hmn")', 'word': 'openAddin("http://aka.ms/Rtbsj3")', 'powerpoint': 'openAddin("http://aka.ms/Y4lf7t")'},
    'overlaybottom': 'openAddin("https://github.com/OfficeDev/Add-in-TaskPane-Sample")'
};
		
var content = {
    'title': 'Content',
    'img': {'excel': 'excelcontent.PNG', 'powerpoint':'powerpointcontent.PNG'},
    'text': 'A Content Add-in appears in-line with the document.',
    'overlaytop': {'excel': 'openAddin("http://aka.ms/Lgaz15")', 'powerpoint': 'openAddin("http://aka.ms/Pzs7nq")'},
    'overlaybottom': 'openAddin("https://github.com/OfficeDev/Add-in-Content-Starter")'
};
		
var compose = {
    'title': 'Compose',
    'img': 'outlookcompose.PNG',
    'text': 'The Mail Add-in appears when the user is composing a new email message',
    'overlaytop': 'openAddin("http://aka.ms/Nahkwl")',   
    'overlaybottom': 'openAddin("https://github.com/OfficeDev/Add-in-MailCompose-Sample")'
};
		
var read = {
    'title': 'Read',
    'img': 'outlookread.PNG',
    'text': 'The Mail Add-in appears when the user is reading an email message',
    'overlaytop': 'window.open("http://aka.ms/Wwq6m4", "_blank")', 
    'overlaybottom': 'window.open("https://github.com/OfficeDev/Add-in-MailRead-Sample", "_blank")'
};
		
function enableOption1() {
    $('#option1').attr('style', 'background:#DBDBDB; margin:20px; padding:20px; visibility:visible;');
    $('#option1').mouseenter(function() {
        $('#option1overlay').attr('style', 'visibility:visible; cursor:pointer');
    });
    $('#option1').mouseleave(function() {
        $('#option1overlay').attr('style', 'visibility:hidden');
    });
}
		
function enableOption2() {
    $('#option2').attr('style', 'background:#DBDBDB; margin:20px; padding:20px; visibility:visible;');
    $('#option2').mouseenter(function() {
        $('#option2overlay').attr('style', 'visibility:visible; cursor:pointer');
    });
    $('#option2').mouseleave(function() {
        $('#option2overlay').attr('style', 'visibility:hidden');
    });
}
			
function selectClient(selectedClient) {
    client = selectedClient;
    $('#option1').attr('style', 'visibility:hidden');
    $('#option2').attr('style', 'visibility:hidden');
			
    switch (selectedClient) {
        case 'excel':
            $('#embedContents').html("<div><h3>Explore the JavaScript API in Excel</h3></div><BR><p>Below, you'll see an Excel Add-in that we've built. This Add-in interacts with the Office document using a powerful JavaScript API. Explore the API by running or changing the code in the tutorials and see what happens.</p><BR><iframe width='100%' height='600' frameborder='0' scrolling='no' src='https://onedrive.live.com/embed?cid=EA09131E6785F7B8&resid=EA09131E6785F7B8%2112968&authkey=AG3QwhNGK4H2nSw&em=2&wdAllowInteractivity=False'></iframe><BR><BR>You can download this add-in and more from the <a href='http://store.office.com' target='_blank'>Office Store.</a>");
					
            $('#option1title').text(content.title);
            $('#option1img').attr('src', content.img.excel);
            $('#option1text').text(content.text);
            $('#option1overlaytop').attr('onclick', content.overlaytop.excel);
            $('#option1overlaybottom').attr('onclick', content.overlaybottom);
					
            $('#option2title').text(taskPane.title);
            $('#option2img').attr('src', taskPane.img.excel);
            $('#option2text').text(taskPane.text);
            $('#option2overlaytop').attr('onclick', taskPane.overlaytop.excel);
            $('#option2overlaybottom').attr('onclick', taskPane.overlaybottom);
					
            enableOption1();
            enableOption2();
            break;
					
        case 'outlook':
            $('#embedContents').html("<div><h3>Explore Outlook Add-ins</h3></div><BR>This short video shows you what an Add-in is and gives a brief introduction to the JavaScript API that powers the Add-ins model.<BR><BR><iframe width='800' height='452' src='https://www.youtube.com/embed/Hov8f_VniCc' frameborder='0' allowfullscreen></iframe><BR><BR><p>What can you build for Outlook? Check out these cool apps in the Office Store for some inspiration.</p><BR><div class='row'><div class='col-md-2'><a href='https://store.office.com/linkedin-for-outlook-WA102996382.aspx?assetid=WA102996382&sourcecorrid=faab8d46-5571-4ba9-841a-97f6d022fc55&searchapppos=0' target='_blank'><img src='linkedin.png' style='border:0'></a></div><div class='col-md-2'><a href='https://store.office.com/docusign-for-outlook-WA104218067.aspx?assetid=WA104218067&ui=en-US&rs=en-US&ad=US&clickedfilter=OfficeProductFilter%3AOutlook&productgroup=Outlook&homprd=Outlook&sourcecorrid=30d1d84a-07ff-48cd-9acd-ef7791994b87&homappcat=Editor%2527s%2BPicks&homapppos=2&homchv=1' target='_blank'><img src='docusign.png' style='border:0'></a></div><div class='col-md-2'><a href='https://store.office.com/salesforce-app-for-outlook-beta-WA104379334.aspx?assetid=WA104379334&ui=en-US&rs=en-US&ad=US&clickedfilter=OfficeProductFilter%3AOutlook&productgroup=Outlook&homprd=Outlook&sourcecorrid=30d1d84a-07ff-48cd-9acd-ef7791994b87&homappcat=Editor%2527s%2BPicks&homapppos=1&homchv=1' target='_blank'><img src='smartsheet.jpg' style='border:0'></a></div></div>");
								
            $('#option1title').text(compose.title);
            $('#option1img').attr('src', compose.img);
            $('#option1text').text(compose.text);
            $('#option1overlaytop').attr('onclick', compose.overlaytop);
            $('#option1overlaybottom').attr('onclick', compose.overlaybottom);
					
            $('#option2title').text(read.title);
            $('#option2img').attr('src', read.img);
            $('#option2text').text(read.text);
            $('#option2overlaytop').attr('onclick', read.overlaytop);
            $('#option2overlaybottom').attr('onclick', read.overlaybottom);
					
            enableOption1();
            enableOption2();
            break;
					
        case 'powerpoint':
				
            $('#embedContents').html("<div><h3>Explore the JavaScript API in PowerPoint</h3></div><BR><p>Below, you'll see a PowerPoint Add-in that we've built. This Add-in interacts with the Office document using a powerful JavaScript API. Explore the API by running or changing the code in the tutorials and see what happens.</p><BR><iframe src='https://onedrive.live.com/embed?cid=EA09131E6785F7B8&resid=EA09131E6785F7B8%2112972&authkey=AMMZi9lIOFr5AaE&em=2&wdAr=1.7777777777777777' width='610px' height='367px' frameborder='0'></iframe><BR><BR>You can download this add-in and more from the <a href='http://store.office.com'>Office Store.</a>");
				
            $('#option1title').text(content.title);
            $('#option1img').attr('src', content.img.powerpoint);
            $('#option1text').text(content.text);
            $('#option1overlaytop').attr('onclick', content.overlaytop.powerpoint);
            $('#option1overlaybottom').attr('onclick', content.overlaybottom);
					
            $('#option2title').text(taskPane.title);
            $('#option2img').attr('src', taskPane.img.powerpoint);
            $('#option2text').text(taskPane.text);
            $('#option2overlaytop').attr('onclick', taskPane.overlaytop.powerpoint);
            $('#option2overlaybottom').attr('onclick', taskPane.overlaybottom);
					
            enableOption1();
            enableOption2();
            break;
					
        case 'word':
				
            $('#embedContents').html("<div><h3>Explore Word Add-ins</h3></div><BR>This short video shows you what a Word Add-in looks like and gives a brief introduction to the JavaScript API that powers the Add-ins model.<BR><BR><iframe width='800' height='452' src='https://www.youtube.com/embed/S23rcdX96Wc' frameborder='0' allowfullscreen></iframe>");
				
				
            $('#option1title').text(taskPane.title);
            $('#option1img').attr('src', taskPane.img.word);
            $('#option1text').text(taskPane.text);
            $('#option1overlaytop').attr('onclick', taskPane.overlaytop.word);
            $('#option1overlaybottom').attr('onclick', taskPane.overlaybottom);
					
            enableOption1();
            break;
    }
    cardTracker.removeBlockingCard();
    cardTracker.showCard("#3");
}

//post a message to the hosting window to resize
$("#body").load(function () {
    resize();
});

function resize() {
    var height = document.getElementsByTagName("html")[0].scrollHeight;
    window.parent.postMessage(["setHeight", height], "*");
}