## Overview

### JSF life cycle
The life cycle when a http request to server, and the server response with the page in html.

### 6 phases
[Pic]


1. Restore View
2. Apply Request Values
3. Process Validations
4. Update Model Values 5. Invoke Application
6. Render Response

### Restore View

* First time
  Construct a new component tree
  Jump to *Render Response*
* Postback
  Retrieves the component tree (later parsing data)

### Apply Request Values
  Traverse the tree
  Copy request value to "local values"
  Validator attached to local values

### Process Validations
  Validate the "local value"
  * Passed: *Update Model Value*
  * Failed: *Render Response*

### Update Model Values
  Update "local value" to the beans

### Image Example
[pic].


[Explaination].

### Invoke Application
  Actionlistener, Action method are executed.
  (Navigate page if needed)A

### Render Response
  Encode response
  Send to Browser

## Event and JSF life cycle

### Overview
The JSF component generate the event and all the listener will be notified
* Value change events
* Action events
* Phase events
* System events (JSF 2.0)
### Value Change Event
  Fired by editable value holders (`h:inputTex`, `h:seelctOneRadio`)
  After *Process Validations*, the proper listener will trigger the  registered method

### Image example
[pic].


[Explanation]

### Action Listener
  Fired by action sources (`h:commandButton`)
  Triggered in *Invoke Aplication*
  * Action listener fired first
  * Action fired later

### Phase Events
  Routinely fired by JSF life cycle

### System Events
  Triggered in some popular events
  * preRenderComponent
  * preRenderView
  * postAddToView
  * preValidate
  * postValidate

### More info
Event listeners can affect JSF life cycle in three ways
* Let life cycle proceed normally
* Skip to *Render Response* phase
* Skip entirely life cycle

## Manipulate JSF Life Circle

### Bypassing Validation
Case: click cancel button.
Solution: skip validation.
`<h:commandButton value="Cancel" action="cancel" immediate="true"/>`


*immediate* attribute

### Immediate Components
[pic].
[Explanation].


### Command Components
```
<h:commandLink action="#{localeChanger.germanAction}" immediate="true">
</h:commandLink>

```

### Input Components
```
 <h:inputText value="..." required="true"/>
 <h:selectOneMenu value="..." onchange="submit()" valueChangeListener="#{form.countryChanged}" immediate="true">
  </h:selectOneMenu>
```

```
public void countryChanged(ValueChangeEvent event) {
  FacesContext context = FacesContext.getCurrentInstance(); if (US.equals((String) event.getNewValue()))
  context.getViewRoot().setLocale(Locale.US); else
  context.getViewRoot().setLocale(Locale.CANADA);
  context.renderResponse();
}
```








