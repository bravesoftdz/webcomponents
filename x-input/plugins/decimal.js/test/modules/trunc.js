if (typeof T === 'undefined') require('../setup');

T('trunc', function () {

  function t(expected, n) {
    T.assertEqual(expected, new Decimal(n).trunc().valueOf());
  }

  Decimal.config({
    precision: 20,
    rounding: 4,
    toExpNeg: -1e3,
    toExpPos: 1e3,
    minE: -9e15,
    maxE: 9e15
  });

  t('0', 0);
  t('-0', -0);
  t('0', '0.000');
  t('Infinity', Infinity);
  t('-Infinity', -Infinity);
  t('NaN', NaN);

  t('0', 0.1);
  t('0', '0.49999999999999994');
  t('0', 0.5);
  t('0', 0.7);
  t('-0', -0.1);
  t('-0', '-0.49999999999999994');
  t('-0', -0.5);
  t('-0', -0.7);
  t('1', 1);
  t('1', 1.1);
  t('1', 1.5);
  t('1', 1.7);
  t('-1', -1);
  t('-1', -1.1);
  t('-1', -1.5);
  t('-1', -1.7);

  t('1', '1.9999999999');
  t('-1', '-1.9999999999');

  t('-2075364', '-2075364.364286541923');
  t('60593539780450631', '60593539780450631');
  t('65937898671515', '65937898671515');
  t('-39719494751819198566798', '-39719494751819198566798.578');
  t('92627382695288166556', '92627382695288166556.8683774524284866028260448205069');
  t('-881574', '-881574');
  t('-3633239209', '-3633239209.654526163275621746013315304191073405508491056');
  t('-23970335459820625362', '-23970335459820625362');
  t('131869457416154038', '131869457416154038');
  t('-4542227860', '-4542227860.9511298545226');
  t('2416872281', '2416872281.963955669484225137349193306323379254936827');
  t('-757684868752087594264588207655', '-757684868752087594264588207655.27838048392835556');
  t('-438798503526', '-438798503526.2317623894721299587561697');
  t('801625782231888715214665', '801625782231888715214665');
  t('327765350218284325239839632046', '327765350218284325239839632046.91682741746683081459605386');
  t('-7469045007691432294', '-7469045007691432294.362757245');
  t('8365540212937142194319515218789', '8365540212937142194319515218789.4106658678537421977827');
  t('-14108', '-14108.495051214515');
  t('49104501', '49104501.10055989379655329194309526150310568683504206945625');
  t('131370406', '131370406.330005158136313262837556068534122953');
  t('-689', '-689.6944252229740521128820354989299283');
  t('73441822178', '73441822178.572653');
  t('-2329', '-2329.42655772223486531483602927572548264457');
  t('-834103872107533086', '-834103872107533086');
  t('-1501493189970435', '-1501493189970435.74866616700317');
  t('70591', '70591.2244675522123484658978887');
  t('4446128540401735117', '4446128540401735117.435836700611264749985822486641350492901');
  t('-597273', '-597273');
  t('729117', '729117');
  t('-6581532150677269472829', '-6581532150677269472829.38194951340848938896000325718062365494');
  t('-131279182164804751', '-131279182164804751.430589952021038264');
  t('2949426983040959', '2949426983040959.8911208825380208568451907');
  t('25166', '25166.125888418871654557352055849116604612621573251770362');
  t('4560569286495', '4560569286495.98300685103599898554605198');
  t('13', '13.763105480576616251068323541559825687');
  t('9050999219306', '9050999219306.7846946346757664893036971777');
  t('20962819101135667464733349383', '20962819101135667464733349383.8959025798517496777183');
  t('4125789711001606948191', '4125789711001606948191.4707575965791242737346836');
  t('-6935501', '-6935501.294727166142750626019282');
  t('-1', '-1.518418076611593764852321765899');
  t('6912783515683955988122411164548', '6912783515683955988122411164548.393');
  t('657', '657.0353902852');
  t('0', '0.00000000000000000000000017921822306362413915');
  t('1483059355427939255846407887', '1483059355427939255846407887.011361095342689876');
  t('8551283060956479352', '8551283060956479352.5707396');
  t('0', '0.000000000000000000000000019904267');
  t('321978830777554620127500539', '321978830777554620127500539.339278568133088682532238002577');
  t('2073', '2073.532654804291079327244387978249477171032485250998396');
  t('677676305591', '677676305591.2');
  t('0', '0.0000000000006');
  t('39181479479778357', '39181479479778357');
  t('0', '0.00000000000000000087964700066672916651');
  t('896', '896');
  t('115083055948552475', '115083055948552475');
  t('9105942082143427451223', '9105942082143427451223');
  t('0', '0.0000000000000009');
  t('0', '0.00000000000000000000004');
  t('0', '0.000250427721966583680168028884692015623739');
  t('0', '0.000000000001585613219016120158734661293405081934');
  t('0', '0.000000090358252973411013592234');
  t('276312604693909858427', '276312604693909858427.21965306055697011390137926559');
  t('0', '0.0000252');

  Decimal.toExpNeg = -100;
  Decimal.toExpPos = 100;

  t('-0', -1e-308);
  t('-1e+308', -1e308);
  t('2.1e+308', '2.1e308');
  t('-0', '-1e-999');
  t('0', '1e-999');
  t('0', '1e-9000000000000000');
  t('-0', '-1e-9000000000000000');
  t('-0', '-9.9e-9000000000000001');  // underflow to zero
  t('9.999999e+9000000000000000', '9.999999e+9000000000000000');
  t('-9.999999e+9000000000000000', '-9.999999e+9000000000000000');
  t('Infinity', '1E9000000000000001');
  t('-Infinity', '-1e+9000000000000001');
  t('5.5879983320336874473209567979e+287894365', '5.5879983320336874473209567979e+287894365');
  t('-5.5879983320336874473209567979e+287894365', '-5.5879983320336874473209567979e+287894365');
});
