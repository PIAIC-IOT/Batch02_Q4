<a name="richresponse"></a>

## RichResponse
Class representing a rich response

These classes construct v1&v2 message objects for Dialogflow
v1 Message object docs:
https://dialogflow.com/docs/reference/agent/message-objects
v2 Message object docs:
https://dialogflow.com/docs/reference/api-v2/rest/v2beta1/projects.agent.intents#Message

**Kind**: global class  
<a name="richresponse_setplatform"></a>

### richResponse.setPlatform(platform) ⇒ [<code>RichResponse</code>](#richresponse)
Set the platform for a specific RichResponse (optional)

**Kind**: instance method of [<code>RichResponse</code>](#richresponse)  

| Param | Type | Description |
| --- | --- | --- |
| platform | <code>string</code> | representing desired rich response target platform |

**Example**  
```js
let richResponse = new RichResponse();
richResponse.setPlatform(PLATFORMS.ACTIONS_ON_GOOGLE)
```
<a name="card"></a>

## Card ⇐ [<code>RichResponse</code>](#richresponse)
Class representing a card response

**Kind**: global class  
**Extends**: [<code>RichResponse</code>](#richresponse)  

* [Card](#card) ⇐ [<code>RichResponse</code>](#richresponse)
    * [new Card(card)](#new_card_new)
    * [.setTitle(title)](#card_settitle) ⇒ [<code>Card</code>](#card)
    * [.setText(text)](#card_settext) ⇒ [<code>Card</code>](#card)
    * [.setImage(imageUrl)](#card_setimage) ⇒ [<code>Card</code>](#card)
    * [.setButton(button)](#card_setbutton) ⇒ [<code>Card</code>](#card)
    * [.setPlatform(platform)](#richresponse_setplatform) ⇒ [<code>RichResponse</code>](#richresponse)

<a name="new_card_new"></a>

### new Card(card)
Constructor for Card object.


| Param | Type | Description |
| --- | --- | --- |
| card | <code>string</code> \| <code>Object</code> | response title string or an object representing a card response |

<a name="card_settitle"></a>

### card.setTitle(title) ⇒ [<code>Card</code>](#card)
Set the title for a Card

**Kind**: instance method of [<code>Card</code>](#card)  

| Param | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | containing the title content |

**Example**  
```js
let card = new Card();
card.setTitle('sample card title')
```
<a name="card_settext"></a>

### card.setText(text) ⇒ [<code>Card</code>](#card)
Set the text for a Card

**Kind**: instance method of [<code>Card</code>](#card)  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | containing the card body text content |

**Example**  
```js
let card = new Card();
card.setText('sample card body text')
```
<a name="card_setimage"></a>

### card.setImage(imageUrl) ⇒ [<code>Card</code>](#card)
Set the image for a Card

**Kind**: instance method of [<code>Card</code>](#card)  

| Param | Type |
| --- | --- |
| imageUrl | <code>string</code> | 

**Example**  
```js
let card = new Card();
card.setImage('https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png');
```
<a name="card_setbutton"></a>

### card.setButton(button) ⇒ [<code>Card</code>](#card)
Set the button for a Card

**Kind**: instance method of [<code>Card</code>](#card)  

| Param | Type | Description |
| --- | --- | --- |
| button | <code>Object</code> | JSON configuration |
| options.text | <code>Object</code> | button text |
| options.url | <code>Object</code> | button link URL |

**Example**  
```js
let card = new Card();
card.setButton({
    text: 'button text',
    url: 'https://assistant.google.com/'
});
```
<a name="richresponse_setplatform"></a>

### card.setPlatform(platform) ⇒ [<code>RichResponse</code>](#richresponse)
Set the platform for a specific RichResponse (optional)

**Kind**: instance method of [<code>Card</code>](#card)  

| Param | Type | Description |
| --- | --- | --- |
| platform | <code>string</code> | representing desired rich response target platform |

**Example**  
```js
let richResponse = new RichResponse();
richResponse.setPlatform(PLATFORMS.ACTIONS_ON_GOOGLE)
```
<a name="suggestion"></a>

## Suggestion ⇐ [<code>RichResponse</code>](#richresponse)
Class representing a suggestions response

**Kind**: global class  
**Extends**: [<code>RichResponse</code>](#richresponse)  

* [Suggestion](#suggestion) ⇐ [<code>RichResponse</code>](#richresponse)
    * [new Suggestion(suggestion)](#new_suggestion_new)
    * [.setReply(reply)](#suggestion_setreply) ⇒ [<code>Suggestion</code>](#suggestion)
    * [.setPlatform(platform)](#richresponse_setplatform) ⇒ [<code>RichResponse</code>](#richresponse)

<a name="new_suggestion_new"></a>

### new Suggestion(suggestion)
Constructor for Suggestion object


| Param | Type | Description |
| --- | --- | --- |
| suggestion | <code>string</code> \| <code>Object</code> | title string or an object representing a suggestion response |

<a name="suggestion_setreply"></a>

### suggestion.setReply(reply) ⇒ [<code>Suggestion</code>](#suggestion)
Set the reply for a Suggestion

**Kind**: instance method of [<code>Suggestion</code>](#suggestion)  

| Param | Type |
| --- | --- |
| reply | <code>string</code> | 

**Example**  
```js
let suggestion = new Suggestion('reply to be overwritten');
suggestion.setReply('reply overwritten');
```
<a name="richresponse_setplatform"></a>

### suggestion.setPlatform(platform) ⇒ [<code>RichResponse</code>](#richresponse)
Set the platform for a specific RichResponse (optional)

**Kind**: instance method of [<code>Suggestion</code>](#suggestion)  

| Param | Type | Description |
| --- | --- | --- |
| platform | <code>string</code> | representing desired rich response target platform |

**Example**  
```js
let richResponse = new RichResponse();
richResponse.setPlatform(PLATFORMS.ACTIONS_ON_GOOGLE)
```
<a name="image"></a>

## Image ⇐ [<code>RichResponse</code>](#richresponse)
Class representing a image response.

**Kind**: global class  
**Extends**: [<code>RichResponse</code>](#richresponse)  

* [Image](#image) ⇐ [<code>RichResponse</code>](#richresponse)
    * [new Image(image)](#new_image_new)
    * [.setImage(imageUrl)](#image_setimage) ⇒ [<code>Image</code>](#image)
    * [.setPlatform(platform)](#richresponse_setplatform) ⇒ [<code>RichResponse</code>](#richresponse)

<a name="new_image_new"></a>

### new Image(image)
Constructor for Image object


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Object</code> | URL string or an object representing a image response |

<a name="image_setimage"></a>

### image.setImage(imageUrl) ⇒ [<code>Image</code>](#image)
Set the image for a Image

**Kind**: instance method of [<code>Image</code>](#image)  

| Param | Type |
| --- | --- |
| imageUrl | <code>string</code> | 

**Example**  
```js
let image = new Image('https://example.com/placeholder.png');
image.setImage('https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png');
```
<a name="richresponse_setplatform"></a>

### image.setPlatform(platform) ⇒ [<code>RichResponse</code>](#richresponse)
Set the platform for a specific RichResponse (optional)

**Kind**: instance method of [<code>Image</code>](#image)  

| Param | Type | Description |
| --- | --- | --- |
| platform | <code>string</code> | representing desired rich response target platform |

**Example**  
```js
let richResponse = new RichResponse();
richResponse.setPlatform(PLATFORMS.ACTIONS_ON_GOOGLE)
```
<a name="payload"></a>

## Payload ⇐ [<code>RichResponse</code>](#richresponse)
Class representing a payload response

**Kind**: global class  
**Extends**: [<code>RichResponse</code>](#richresponse)  

* [Payload](#payload) ⇐ [<code>RichResponse</code>](#richresponse)
    * [new Payload(platform, payload)](#new_payload_new)
    * [.setPayload(payload)](#payload_setpayload) ⇒ [<code>Payload</code>](#payload)
    * [.setPlatform(platform)](#richresponse_setplatform) ⇒ [<code>RichResponse</code>](#richresponse)

<a name="new_payload_new"></a>

### new Payload(platform, payload)
Constructor for Payload object


| Param | Type | Description |
| --- | --- | --- |
| platform | <code>string</code> | string indicating target platform of payload |
| payload | <code>Object</code> | contents for indicated platform |
| options.sendAsMessage | <code>boolean</code> | to include the payload in the   messages field. Defaults to false to only send in the payload data field. |
| options.rawPayload | <code>boolean</code> | to prevent nesting the payload under   the platform string, e.g. {"google": payload}. |

<a name="payload_setpayload"></a>

### payload.setPayload(payload) ⇒ [<code>Payload</code>](#payload)
Set the payload contents for a Payload

**Kind**: instance method of [<code>Payload</code>](#payload)  

| Param | Type |
| --- | --- |
| payload | <code>string</code> | 

**Example**  
```js
const googlePayloadJson = {
  expectUserResponse: true,
  isSsml: false,
  noInputPrompts: [],
  richResponse: {
    items: [{ simpleResponse: { textToSpeech: 'hello', displayText: 'hi' } }]
  },
  systemIntent: {
    intent: 'actions.intent.OPTION',
  }
}
let payload = new Payload(PLATFORMS.ACTIONS_ON_GOOGLE, {});
payload.setPayload(googlePayloadJson);
```
<a name="richresponse_setplatform"></a>

### payload.setPlatform(platform) ⇒ [<code>RichResponse</code>](#richresponse)
Set the platform for a specific RichResponse (optional)

**Kind**: instance method of [<code>Payload</code>](#payload)  

| Param | Type | Description |
| --- | --- | --- |
| platform | <code>string</code> | representing desired rich response target platform |

**Example**  
```js
let richResponse = new RichResponse();
richResponse.setPlatform(PLATFORMS.ACTIONS_ON_GOOGLE)
```
<a name="text"></a>

## Text ⇐ [<code>RichResponse</code>](#richresponse)
Class representing a text response

**Kind**: global class  
**Extends**: [<code>RichResponse</code>](#richresponse)  

* [Text](#text) ⇐ [<code>RichResponse</code>](#richresponse)
    * [new Text(text)](#new_text_new)
    * [.setText(text)](#text_settext) ⇒ [<code>Text</code>](#text)
    * [.setSsml(ssml)](#text_setssml) ⇒ [<code>Text</code>](#text)
    * [.setPlatform(platform)](#richresponse_setplatform) ⇒ [<code>RichResponse</code>](#richresponse)

<a name="new_text_new"></a>

### new Text(text)
Constructor for Text object


| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> \| <code>Object</code> | response string or an object representing a text response |

<a name="text_settext"></a>

### text.setText(text) ⇒ [<code>Text</code>](#text)
Set the text for a Text

**Kind**: instance method of [<code>Text</code>](#text)  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | containing the text response content |

**Example**  
```js
let text = new Text();
text.setText('sample text response')
```
<a name="text_setssml"></a>

### text.setSsml(ssml) ⇒ [<code>Text</code>](#text)
Set the SSML for a Text

**Kind**: instance method of [<code>Text</code>](#text)  

| Param | Type | Description |
| --- | --- | --- |
| ssml | <code>string</code> | containing the SSML response content |

**Example**  
```js
let text = new Text();
text.setSsml('<speak>This is <say-as interpret-as="characters">SSML</say-as>.</speak>')
```
<a name="richresponse_setplatform"></a>

### text.setPlatform(platform) ⇒ [<code>RichResponse</code>](#richresponse)
Set the platform for a specific RichResponse (optional)

**Kind**: instance method of [<code>Text</code>](#text)  

| Param | Type | Description |
| --- | --- | --- |
| platform | <code>string</code> | representing desired rich response target platform |

**Example**  
```js
let richResponse = new RichResponse();
richResponse.setPlatform(PLATFORMS.ACTIONS_ON_GOOGLE)
```
