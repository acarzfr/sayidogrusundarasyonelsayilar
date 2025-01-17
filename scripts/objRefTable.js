const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Mouse,
		C3.Plugins.Touch,
		C3.Behaviors.Flash,
		C3.Plugins.HTMLElement,
		C3.Plugins.Audio,
		C3.Plugins.Text,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Mouse.Acts.SetCursor,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Acts.WaitForPreviousActions,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.HTMLElement.Acts.SetContentCSSStyle,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Exps.choose,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.HTMLElement.Acts.SetContent,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.System.Cnds.Repeat,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Sprite.Exps.UID,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.System.Cnds.PickByComparison,
		C3.Plugins.Sprite.Acts.SetScale,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.System.Cnds.LayerVisible,
		C3.Plugins.Text.Acts.SetText
	];
};
self.C3_JsPropNameTable = [
	{girisek: 0},
	{oyunek: 0},
	{bilgiek: 0},
	{butnlrek: 0},
	{BTN_Genel: 0},
	{SPR_Puan: 0},
	{SPR_SoruNo: 0},
	{SPR_Donut: 0},
	{sonucek: 0},
	{Fare: 0},
	{Dokun: 0},
	{dogru: 0},
	{Parlama: 0},
	{SPR_Noktalar: 0},
	{HTMLElementi: 0},
	{Ses: 0},
	{Yazı: 0},
	{puan: 0},
	{soruno: 0},
	{isaret: 0},
	{tam: 0},
	{pay: 0},
	{payda: 0},
	{x_ilk: 0},
	{x_son: 0},
	{y: 0},
	{nokta_uid: 0},
	{tiklandi: 0},
	{aralik: 0}
];

self.InstanceType = {
	girisek: class extends self.ISpriteInstance {},
	oyunek: class extends self.ISpriteInstance {},
	bilgiek: class extends self.ISpriteInstance {},
	butnlrek: class extends self.ISpriteInstance {},
	BTN_Genel: class extends self.ISpriteInstance {},
	SPR_Puan: class extends self.ISpriteInstance {},
	SPR_SoruNo: class extends self.ISpriteInstance {},
	SPR_Donut: class extends self.ISpriteInstance {},
	sonucek: class extends self.ISpriteInstance {},
	Fare: class extends self.IInstance {},
	Dokun: class extends self.IInstance {},
	SPR_Noktalar: class extends self.ISpriteInstance {},
	HTMLElementi: class extends self.IHTMLElementInstance {},
	Ses: class extends self.IInstance {},
	Yazı: class extends self.ITextInstance {}
}