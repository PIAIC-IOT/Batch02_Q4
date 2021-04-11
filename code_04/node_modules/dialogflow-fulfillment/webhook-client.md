<a name="webhookclient"></a>

## WebhookClient
This is the class that handles the communication with Dialogflow's webhook
fulfillment API v1 & v2 with support for rich responses across 8 platforms and
Dialogflow's simulator

**Kind**: global class  

* [WebhookClient](#webhookclient)
    * [new WebhookClient(options)](#new_webhookclient_new)
    * [.agentVersion](#webhookclient_agentversion) : <code>number</code>
    * [.intent](#webhookclient_intent) : <code>string</code>
    * [.action](#webhookclient_action) : <code>string</code>
    * [.parameters](#webhookclient_parameters) : <code>Object</code>
    * ~~[.contexts](#webhookclient_contexts) : <code>string</code>~~
    * [.context](#webhookclient_context) : <code>Contexts</code>
    * [.requestSource](#webhookclient_requestsource) : <code>string</code>
    * [.originalRequest](#webhookclient_originalrequest) : <code>object</code>
    * [.query](#webhookclient_query) : <code>string</code>
    * [.locale](#webhookclient_locale) : <code>string</code>
    * [.session](#webhookclient_session) : <code>string</code>
    * [.consoleMessages](#webhookclient_consolemessages) : [<code>Array.&lt;RichResponse&gt;</code>](#richresponse)
    * [.alternativeQueryResults](#webhookclient_alternativequeryresults) : <code>object</code>
    * [.add(responses)](#webhookclient_add)
    * [.end(responses)](#webhookclient_end)
    * [.addResponse_(response)](#webhookclient_addresponse_)
    * [.handleRequest(handler)](#webhookclient_handlerequest) ⇒ <code>Promise</code>
    * ~~[.setContext(context)](#webhookclient_setcontext) ⇒ [<code>WebhookClient</code>](#webhookclient)~~
    * ~~[.clearOutgoingContexts()](#webhookclient_clearoutgoingcontexts) ⇒ [<code>WebhookClient</code>](#webhookclient)~~
    * ~~[.clearContext(context)](#webhookclient_clearcontext) ⇒ [<code>WebhookClient</code>](#webhookclient)~~
    * ~~[.getContext(contextName)](#webhookclient_getcontext) ⇒ <code>Object</code>~~
    * [.setFollowupEvent(event)](#webhookclient_setfollowupevent)
    * [.conv()](#webhookclient_conv) ⇒ <code>DialogflowConversation</code> \| <code>null</code>

<a name="new_webhookclient_new"></a>

### new WebhookClient(options)
Constructor for WebhookClient object
To be used in the Dialogflow fulfillment webhook logic


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | JSON configuration. |
| options.request | <code>Object</code> | Express HTTP request object. |
| options.response | <code>Object</code> | Express HTTP response object. |

<a name="webhookclient_agentversion"></a>

### webhookClient.agentVersion : <code>number</code>
The agent version (v1 or v2) based on Dialogflow webhook request
https://dialogflow.com/docs/reference/v2-comparison

**Kind**: instance property of [<code>WebhookClient</code>](#webhookclient)  
<a name="webhookclient_intent"></a>

### webhookClient.intent : <code>string</code>
Dialogflow intent name or null if no value: https://dialogflow.com/docs/intents

**Kind**: instance property of [<code>WebhookClient</code>](#webhookclient)  
<a name="webhookclient_action"></a>

### webhookClient.action : <code>string</code>
Dialogflow action or null if no value: https://dialogflow.com/docs/actions-and-parameters

**Kind**: instance property of [<code>WebhookClient</code>](#webhookclient)  
<a name="webhookclient_parameters"></a>

### webhookClient.parameters : <code>Object</code>
Dialogflow parameters included in the request or null if no value
https://dialogflow.com/docs/actions-and-parameters

**Kind**: instance property of [<code>WebhookClient</code>](#webhookclient)  
<a name="webhookclient_contexts"></a>

### ~~webhookClient.contexts : <code>string</code>~~
***Deprecated***

Dialogflow contexts included in the request or null if no value
https://dialogflow.com/docs/contexts

**Kind**: instance property of [<code>WebhookClient</code>](#webhookclient)  
<a name="webhookclient_context"></a>

### webhookClient.context : <code>Contexts</code>
Instance of Dialogflow contexts class to provide an API to set/get/delete contexts

**Kind**: instance property of [<code>WebhookClient</code>](#webhookclient)  
<a name="webhookclient_requestsource"></a>

### webhookClient.requestSource : <code>string</code>
Dialogflow source included in the request or null if no value
https://dialogflow.com/docs/reference/agent/query#query_parameters_and_json_fields

**Kind**: instance property of [<code>WebhookClient</code>](#webhookclient)  
<a name="webhookclient_originalrequest"></a>

### webhookClient.originalRequest : <code>object</code>
Dialogflow original request object from detectIntent/query or platform integration
(Google Assistant, Slack, etc.) in the request or null if no value
https://dialogflow.com/docs/reference/agent/query#query_parameters_and_json_fields

**Kind**: instance property of [<code>WebhookClient</code>](#webhookclient)  
<a name="webhookclient_query"></a>

### webhookClient.query : <code>string</code>
Original user query as indicated by Dialogflow or null if no value

**Kind**: instance property of [<code>WebhookClient</code>](#webhookclient)  
<a name="webhookclient_locale"></a>

### webhookClient.locale : <code>string</code>
Original request language code or locale (i.e. "en" or "en-US")

**Kind**: instance property of [<code>WebhookClient</code>](#webhookclient)  
<a name="webhookclient_session"></a>

### webhookClient.session : <code>string</code>
Dialogflow input contexts included in the request or null if no value
Dialogflow v2 API only
https://dialogflow.com/docs/reference/api-v2/rest/v2beta1/WebhookRequest#FIELDS.session

**Kind**: instance property of [<code>WebhookClient</code>](#webhookclient)  
<a name="webhookclient_consolemessages"></a>

### webhookClient.consoleMessages : [<code>Array.&lt;RichResponse&gt;</code>](#richresponse)
List of messages defined in Dialogflow's console for the matched intent
https://dialogflow.com/docs/rich-messages

**Kind**: instance property of [<code>WebhookClient</code>](#webhookclient)  
<a name="webhookclient_alternativequeryresults"></a>

### webhookClient.alternativeQueryResults : <code>object</code>
List of alternative query results
Query results can be from other Dialogflow intents or Knowledge Connectors
https://cloud.google.com/dialogflow-enterprise/alpha/docs/knowledge-connectors
Note:this feature only availbe in Dialogflow v2

**Kind**: instance property of [<code>WebhookClient</code>](#webhookclient)  
<a name="webhookclient_add"></a>

### webhookClient.add(responses)
Add a response or list of responses to be sent to Dialogflow

**Kind**: instance method of [<code>WebhookClient</code>](#webhookclient)  

| Param | Type | Description |
| --- | --- | --- |
| responses | [<code>RichResponse</code>](#richresponse) \| <code>string</code> \| [<code>Array.&lt;RichResponse&gt;</code>](#richresponse) \| <code>Array.&lt;string&gt;</code> | (list) or single responses |

<a name="webhookclient_end"></a>

### webhookClient.end(responses)
Add a response or list of responses to be sent to Dialogflow and end the conversation
Note: Only supported on Dialogflow v2's telephony gateway, Google Assistant and Alexa integrations

**Kind**: instance method of [<code>WebhookClient</code>](#webhookclient)  

| Param | Type | Description |
| --- | --- | --- |
| responses | [<code>RichResponse</code>](#richresponse) \| <code>string</code> \| [<code>Array.&lt;RichResponse&gt;</code>](#richresponse) \| <code>Array.&lt;string&gt;</code> | (list) or single responses |

<a name="webhookclient_addresponse_"></a>

### webhookClient.addResponse_(response)
Add a response to be sent to Dialogflow
Private method to add a response to be sent to Dialogflow

**Kind**: instance method of [<code>WebhookClient</code>](#webhookclient)  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>RichResponse</code>](#richresponse) \| <code>string</code> | an object or string representing the rich response to be added |

<a name="webhookclient_handlerequest"></a>

### webhookClient.handleRequest(handler) ⇒ <code>Promise</code>
Handles the incoming Dialogflow request using a handler or Map of handlers
Each handler must be a function callback.

**Kind**: instance method of [<code>WebhookClient</code>](#webhookclient)  

| Param | Type | Description |
| --- | --- | --- |
| handler | <code>Map</code> \| <code>requestCallback</code> | map of Dialogflow action name to handler function or     function to handle all requests (regardless of Dialogflow action). |

<a name="webhookclient_setcontext"></a>

### ~~webhookClient.setContext(context) ⇒ [<code>WebhookClient</code>](#webhookclient)~~
***Deprecated***

Set a new Dialogflow outgoing context: https://dialogflow.com/docs/contexts

**Kind**: instance method of [<code>WebhookClient</code>](#webhookclient)  

| Param | Type | Description |
| --- | --- | --- |
| context | <code>string</code> \| <code>Object</code> | name of context or an object representing a context |

**Example**  
```js
const { WebhookClient } = require('dialogflow-webhook');
const agent = new WebhookClient({request: request, response: response});
agent.setContext('sample context name');
const context = {'name': 'weather', 'lifespan': 2, 'parameters': {'city': 'Rome'}};
agent.setContext(context);
```
<a name="webhookclient_clearoutgoingcontexts"></a>

### ~~webhookClient.clearOutgoingContexts() ⇒ [<code>WebhookClient</code>](#webhookclient)~~
***Deprecated***

Clear all existing outgoing contexts: https://dialogflow.com/docs/contexts

**Kind**: instance method of [<code>WebhookClient</code>](#webhookclient)  
**Example**  
```js
const { WebhookClient } = require('dialogflow-webhook');
const agent = new WebhookClient({request: request, response: response});
agent.clearOutgoingContexts();
```
<a name="webhookclient_clearcontext"></a>

### ~~webhookClient.clearContext(context) ⇒ [<code>WebhookClient</code>](#webhookclient)~~
***Deprecated***

Clear an existing outgoing context: https://dialogflow.com/docs/contexts

**Kind**: instance method of [<code>WebhookClient</code>](#webhookclient)  

| Param | Type | Description |
| --- | --- | --- |
| context | <code>string</code> | name of an existing outgoing context |

**Example**  
```js
const { WebhookClient } = require('dialogflow-webhook');
const agent = new WebhookClient({request: request, response: response});
agent.clearContext('sample context name');
```
<a name="webhookclient_getcontext"></a>

### ~~webhookClient.getContext(contextName) ⇒ <code>Object</code>~~
***Deprecated***

Get an context from the Dialogflow webhook request: https://dialogflow.com/docs/contexts

**Kind**: instance method of [<code>WebhookClient</code>](#webhookclient)  
**Returns**: <code>Object</code> - context context object with the context name  

| Param | Type | Description |
| --- | --- | --- |
| contextName | <code>string</code> | name of an context present in the Dialogflow webhook request |

**Example**  
```js
const { WebhookClient } = require('dialogflow-webhook');
const agent = new WebhookClient({request: request, response: response});
let context = agent.getContext('sample context name');
```
<a name="webhookclient_setfollowupevent"></a>

### webhookClient.setFollowupEvent(event)
Set the followup event

**Kind**: instance method of [<code>WebhookClient</code>](#webhookclient)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> \| <code>Object</code> | string with the name of the event or an event object |

**Example**  
```js
const { WebhookClient } = require('dialogflow-webhook');
const agent = new WebhookClient({request: request, response: response});
let event = agent.setFollowupEvent('sample event name');
```
<a name="webhookclient_conv"></a>

### webhookClient.conv() ⇒ <code>DialogflowConversation</code> \| <code>null</code>
Get Actions on Google DialogflowConversation object

**Kind**: instance method of [<code>WebhookClient</code>](#webhookclient)  
**Returns**: <code>DialogflowConversation</code> \| <code>null</code> - DialogflowConversation object or null  
**Example**  
```js
const { WebhookClient } = require('dialogflow-webhook');
const agent = new WebhookClient({request: request, response: response});
let conv = agent.conv();
conv.ask('Hi from the Actions on Google client library');
agent.add(conv);
```
<a name="v2agent"></a>

## V2Agent
Class representing a v2 Dialogflow agent

**Kind**: global class  

* [V2Agent](#v2agent)
    * [new V2Agent(agent)](#new_v2agent_new)
    * [.end_(responses)](#v2agent_end_)

<a name="new_v2agent_new"></a>

### new V2Agent(agent)
Constructor for V2Agent object
To be used in with WebhookClient class


| Param | Type | Description |
| --- | --- | --- |
| agent | <code>Object</code> | instance of WebhookClient class |

<a name="v2agent_end_"></a>

### v2Agent.end_(responses)
Add a response or list of responses to be sent to Dialogflow and end the conversation
Note: Only supported on Dialogflow v2's telephony gateway, Google Assistant and Alexa integrations

**Kind**: instance method of [<code>V2Agent</code>](#v2agent)  

| Param | Type | Description |
| --- | --- | --- |
| responses | [<code>RichResponse</code>](#richresponse) \| <code>string</code> \| [<code>Array.&lt;RichResponse&gt;</code>](#richresponse) \| <code>Array.&lt;string&gt;</code> | (list) or single responses |

<a name="v1agent"></a>

## V1Agent
Class representing a v1 Dialogflow agent

**Kind**: global class  

* [V1Agent](#v1agent)
    * [new V1Agent(agent)](#new_v1agent_new)
    * [.end_()](#v1agent_end_)

<a name="new_v1agent_new"></a>

### new V1Agent(agent)
Constructor for V1Agent object
To be used in with WebhookClient class


| Param | Type | Description |
| --- | --- | --- |
| agent | <code>Object</code> | instance of WebhookClient class |

<a name="v1agent_end_"></a>

### v1Agent.end_()
Add a response or list of responses to be sent to Dialogflow and end the conversation
Note: not support on v1

**Kind**: instance method of [<code>V1Agent</code>](#v1agent)  
<a name="context"></a>

## Context
This is the class that handles Dialogflow's contexts for the WebhookClient class

**Kind**: global class  

* [Context](#context)
    * [new Context(inputContexts, session)](#new_context_new)
    * [.contexts](#context_contexts) : <code>object</code>
    * [.set(name, [lifespan], [params])](#context_set)
    * [.get(name)](#context_get) ⇒ <code>Object</code> \| <code>null</code>
    * [.delete(name)](#context_delete)
    * [.getV1OutputContextsArray()](#context_getv1outputcontextsarray) ⇒ <code>Array.&lt;Object&gt;</code>
    * [.getV2OutputContextsArray()](#context_getv2outputcontextsarray) ⇒ <code>Array.&lt;Object&gt;</code>

<a name="new_context_new"></a>

### new Context(inputContexts, session)
Constructor for Context object
To be used in by Dialogflow's webhook client class
context objects take are formatted as follows:
  { "context-name": {
       "lifespan": 5,
       "parameters": {
         "param": "value"
       }
    }
  }


| Param | Type | Description |
| --- | --- | --- |
| inputContexts | <code>Object</code> | input contexts of a v1 or v2 webhook request |
| session | <code>string</code> | for a v2 webhook request & response |

<a name="context_contexts"></a>

### context.contexts : <code>object</code>
Dialogflow contexts included in the request or empty object if no value
https://dialogflow.com/docs/contexts

**Kind**: instance property of [<code>Context</code>](#context)  
<a name="context_set"></a>

### context.set(name, [lifespan], [params])
Set a new Dialogflow outgoing context: https://dialogflow.com/docs/contexts

**Kind**: instance method of [<code>Context</code>](#context)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> \| <code>Object</code> |  | of context or an object representing a context |
| [lifespan] | <code>number</code> | <code>5</code> | lifespan of context, number with a value of 0 or greater |
| [params] | <code>Object</code> |  | parameters of context (can be arbitrary key-value pairs) |

**Example**  
```js
const { WebhookClient } = require('dialogflow-webhook');
const agent = new WebhookClient({request: request, response: response});
agent.context.set('sample context name');
const context = {'name': 'weather', 'lifespan': 2, 'parameters': {'city': 'Rome'}};
```
<a name="context_get"></a>

### context.get(name) ⇒ <code>Object</code> \| <code>null</code>
Get an context from the Dialogflow webhook request: https://dialogflow.com/docs/contexts

**Kind**: instance method of [<code>Context</code>](#context)  
**Returns**: <code>Object</code> \| <code>null</code> - context object with lifespan and parameters (if defined) or null  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | of an context present in the Dialogflow webhook request |

**Example**  
```js
const { WebhookClient } = require('dialogflow-webhook');
const agent = new WebhookClient({request: request, response: response});
let context = agent.context.get('sample context name');
```
<a name="context_delete"></a>

### context.delete(name)
Delete an context a Dialogflow session (set the lifespan to 0)

**Kind**: instance method of [<code>Context</code>](#context)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | of context to be deleted |

**Example**  
```js
const { WebhookClient } = require('dialogflow-webhook');
const agent = new WebhookClient({request: request, response: response});
agent.context.delete('no-longer-relevant-context-name');
```
<a name="context_getv1outputcontextsarray"></a>

### context.getV1OutputContextsArray() ⇒ <code>Array.&lt;Object&gt;</code>
Get array of context objects formatted for v1 webhook response

**Kind**: instance method of [<code>Context</code>](#context)  
**Returns**: <code>Array.&lt;Object&gt;</code> - array of v1 context objects for webhook response  
<a name="context_getv2outputcontextsarray"></a>

### context.getV2OutputContextsArray() ⇒ <code>Array.&lt;Object&gt;</code>
Get array of context objects formatted for v2 webhook response

**Kind**: instance method of [<code>Context</code>](#context)  
**Returns**: <code>Array.&lt;Object&gt;</code> - array of v2 context objects for webhook response  
