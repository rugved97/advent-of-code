// --- Day 3: Rucksack Reorganization ---
// One Elf has the important job of loading all of the rucksacks with supplies for the jungle journey. Unfortunately, that Elf didn't quite follow the packing instructions, and so a few items now need to be rearranged.

// Each rucksack has two large compartments. All items of a given type are meant to go into exactly one of the two compartments. The Elf that did the packing failed to follow this rule for exactly one item type per rucksack.

// The Elves have made a list of all of the items currently in each rucksack (your puzzle input), but they need your help finding the errors. Every item type is identified by a single lowercase or uppercase letter (that is, a and A refer to different types of items).

// The list of items for each rucksack is given as characters all on a single line. A given rucksack always has the same number of items in each of its two compartments, so the first half of the characters represent items in the first compartment, while the second half of the characters represent items in the second compartment.

// For example, suppose you have the following list of contents from six rucksacks:

// vJrwpWtwJgWrhcsFMMfFFhFp
// jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
// PmmdzqPrVvPwwTWBwg
// wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
// ttgJtRGJQctTZtZT
// CrZsJsPPZsGzwwsLwLmpwMDw
// The first rucksack contains the items vJrwpWtwJgWrhcsFMMfFFhFp, which means its first compartment contains the items vJrwpWtwJgWr, while the second compartment contains the items hcsFMMfFFhFp. The only item type that appears in both compartments is lowercase p.
// The second rucksack's compartments contain jqHRNqRjqzjGDLGL and rsFMfFZSrLrFZsSL. The only item type that appears in both compartments is uppercase L.
// The third rucksack's compartments contain PmmdzqPrV and vPwwTWBwg; the only common item type is uppercase P.
// The fourth rucksack's compartments only share item type v.
// The fifth rucksack's compartments only share item type t.
// The sixth rucksack's compartments only share item type s.
// To help prioritize item rearrangement, every item type can be converted to a priority:

// Lowercase item types a through z have priorities 1 through 26.
// Uppercase item types A through Z have priorities 27 through 52.
// In the above example, the priority of the item type that appears in both compartments of each rucksack is 16 (p), 38 (L), 42 (P), 22 (v), 20 (t), and 19 (s); the sum of these is 157.

// Find the item type that appears in both compartments of each rucksack. What is the sum of the priorities of those item types?

let rucksackContentlist = `GwrhJPDJCZFRcwfZWV
LjnQlqNpjjmpmQlLlqNfZRvQcTWcTSTTZcSQcZ
nNqjdspspngnmjmslqmjjjCDGrHPHMGddGCMCGPPPJWC
GwmVZmPWWFFmBbVbZVwmbPsTCnlgQgnQfhlffffZnlQh
DqVDSqqSMzLLDDNSHHLdqSdSllCQjsTlClhlflnTlhjgfgfM
VHJztNLHGtcbvvPG
bjrPrNCtNrjdcCPpptfpTVspDtfTtB
JGQJMJQMmmmZMnnLpLBTpHCD
WJJqWRgWlCJZhZRCQZwdPScdrPNbvzPzwvqz
QNSQNBWQNLjZBNNhLhSNRsTcsrTTVzcwZZZsfrrbwb
tCFtHpppppMldpvpqnMFmMVGrbPcrwbzswrzcccfvTfw
pdmCpgqCdmHHdJVWgSRNJDRVVj
sNrFnvNSzrjQtQjQTj
lcPmcJDLdPDbJPVLljdGGBBThBQTGwTtBw
PDLqmJmpJQfFqfqsCM
BnhctqdnqnRcBnslCJJCMrJrsG
wNDMZpbQwMpCvCGVjlss
WfzNwZFbwZzZmFZbLzNwzzzzcdqgRMTTPdHPTTPMRdcWgRPt
grsrVSFSSdFSDFVFjZZWwpWpZWZplgZZ
mcBPPPBLBfNdLlvvWljWJC
dMcmcRdbRzdVhFthSsTShM
bzvJZMTzTZSHLCCdDzmDcc
hqBqWPFssvshWvvssNqtsHftmfpHfdcdDGHmcpfctL
WvBQgNNNhghTJbJQlJTZlT
chcdwNwdbCbQctCjnnQGHsQspMHMjG
nSSSJqJZzJgWWRfZDJSnqvTTsVvvHVPpHVfpjHMTjP
BZRDRmmrDWSrZWWzWSRNhdnCFwChclFtwbNdtr
lNgmssCtqLwqCCtfsCLHPFhhhmMhVzBDbVzMDMVz
ZnRlQTlJzFQFQFVV
npZJvRRGZSnWvSvrSLglsClfpfcLgNgpHf
tVtqcVqFVtZhcfFtqlgSpmpDSDNPzSzZmNpw
LRGTHqbrHdnGHrTCSSwNDzMDwPMzNwbp
TqWGJrGHCHnTWnhsWcFthFjtfQch
qNnTbwtctvffFcqfrHjMrFjVHRjSjZDZ
dLLzWWPmCmCzGdsLgBLGGBDRMVMHRlrrrZDDZsNMrNNS
PJQWggCzWNWJzGWfchvfTbJvfnnwtf
ghzdgzzdQsdqzzhMNqQzvhgQnRRBWTjWWGTRGWwGTZhwGnBT
fsrfJHbFfDFLVLVFHrWCWrBRZZTGCCjwWZ
HLLllcDPbLPQdPspMNgvMt
fNDJqdPNbtHpCbwpCCCp
RTMRLrzGrMRMRPWnnvSmgCHFCCFmmT
WQsWQjzGWMsGQzWclQtVBJfBftNdtqVPfP
gbTCVVmDVFdsgmgrrcfwlwfTfPlcRR
qhQZqQvnQhLQhJnvfPcSwSwlfjGcqjqj
tLNZLZZJJZthpzhMZDCdFmFsmWWmtDDgsw
bqCvLvLppzPzPPvPbFztFtttBNGdGsRggSgGSHDdggHSzNgH
rMQpWfMfrcTjWJhwWHHsSBsRBdSTTNBgSR
VwfmWjwMWwccrWcWpQQFnFtlCqmltFnFLbbZmn
cWqsMWJMzqJJMHsJcqsJqTqjSbLBdfdSbtzLbbLfbSfShfhd
gplGvQmRrCrgZSZtSGZZjhbj
CQmmmmNQRPvjgRClCvmmcVHPqMFMFsWJVqFFcnTJ
QHHqvGwjjWNqvGTQGvTFcGwJRJbszcPtDbJVbtPzVbDptp
MLdrgmSgZZdhdfbLVRpszlRDstRL
gdSgMCSfdMnrghCWGRQvHwvNHjnjvv
RDBZwvZBrMlsvnlb
WdFQqdjWWcHHPrwSPnnSWnSS
mLdqgqHmcjHHjqLHjLppmhfBfgtDtBJZJfVtBZwGZB
CCWRJQnZlHtHtNZRFDcBhrcvhDrJVVDv
dPPSqLzfsqGLSTzfLzLGdLMVVgvBcmgMVwmmDFrVgmBBBr
SFjdTGzqpjdRbNRNnjtnQR
hjNcwBDDwDFcjdFfjtFhtcRsGGgTsGRRRTsGGqZGRq
gbmrLnbzLmvQJnQVVpqZTqzWSCRpqRTsSR
MQMvVMbPQQHrQMnMPldtwNNfgHtlwBhdwj
zwzwpzMfzrBMWfCCZrwzrMJDGGGnNmGNZvgNZsDDsGsG
FbFqSbcSbSHqTjmgGFnJglllsDJm
TbhVdVjqdtqTjVHqjPdthPBBWpCnRfwRPRCfBCCnWR
hlpmbfJJpCSChmJMmrSjTjcSdjTtQQTtTtjF
gqrgsqLzgnBgZGzHBnnsQNNQtjjcNNjjtNFQNcNH
LVRzgGGzzzPCVrJMbPJb
VHrmqFnVdvlzzNrr
PMtwBJPBcPwfbwBJndplLvLdLlgMMzLL
bBZnTwbtnScfQJPJwPTjqGZFsVFjDHHGhhHhVj
cftqScHJrfVfrrRZ
DTTsDvvlBbTGrWBwwsWDBbWdVpZjjZjpVPPGhRRVjVZNRPNN
lsWdWDbrTLBsbdrmdwbMJtmHMQJccFHFnJFqFt
SWNPTPVSWChCSmQQhpppJdFJLpDpgLJmLd
NGGtNtGfHtDpdJdqLB
NcsNGNjHZsZGnzZfnGhQnhPClrVlQPhTVVhl
QDdgMBsNhhMgcWbZdzmWLzFzWH
fRqRJJqGCvrJGjCRRrSJlfPtHzzPmfFbtPtLZZLnmt
VjvwwjlwVGGqJSSqJFccshpgNhQNQTsVgBgT
wvDLDwCbFgSTfTSJJgfB
qsRhmhqchmVhPdfTHJSzpCtJpfPf
hmdhrWrddmhlqCRcwQjDLMQnMFDZnlLl
trMWtlwwMplMZMCZWltDpzBLBnflVLBbHzbBSGlVlL
ghhqJTfmjQjfqqznznnHnBRzBLmn
sQhPQsjjQcQcTsPqZWwwZcFfWrWcrZww
MRVpVCZZTHWVMCHvgNvVvbQSqgQSlg
NFmnrNDDfnjFnndfssmcStvjvQQlvzvllqvwQllj
GGPNmBrFNdcfcGrsGcdmDFhJHMMhHLZJMhpLHCMMMMPJ
DSvDGdGFlGGnDZFdVSZvfPqwnfhpnrqpPNpLPrrh
sWcTjtHCsTmsCNfgMPjpfPhqhP
BtHzBzChzBBvFSDJvVzFJJ
sfsNrsFFBTfjwwtNNWHPVCVWtSCDDCDmmS
zMdhMMZnSccMmmWVWmCPlC
cLSScJZQbcvLhZvnzBwfTjrpNwNrBFffpb
TBrCBgrTngVQBVbhrCtgJJrGssGsMGRGcjMcNjfN
LZdSLvHMFdzFRWsLjcGRWWNJ
pHpzlqPqFPvdBthgMbVPDhgh
SZlnZZvBvvMrcBnllBMZSvhGMtQwFMGztthfwQtMwwPf
HLqsDgNsDLDDDjggHDHszthzFbQGTghPGQPbTfFT
dmLqDqCmFNjJsjHdssFNHDVWZccnRllnVZvRSBZrZlCc
SccnnSGGftShfHSHHhnvbMjvVlCjzbVzzbMMTbCB
gRpppNNQLWqZgPZwNWwwBMBbDlZCTzVTjHMMbBjV
dqNQPQRqrqpPcGtchhdfhHSF
mfDzgnNMMszBtJCpHlrjnFppCdHj
LLRThGGZcbClBQpdWFGl
bSqVTbBbMVMsNmNM
BTTbbLVpfchmjbsj
JSQJHDMHqdNZTZlhFFhCFFrNhNcsrr
tMwJQlwMMlQwDDJtWGLGPpWLLGnTPn
LcVQQCPPLqTzqQTcllTzhnHHfFJRcGHcFfwRGHwJjJ
stdWDDBtVgbpWgZbsNgDNdWFGMnnwHfjHFpfwwMGMMGRjJ
ZWSDtgNdWNBdgsdsNDDsdbDlTzCVSTCqQmSqTQSvhqLVQq
dZbgdZbNtmqttFJtHHzcczMcFszHnsvH
wwpQplQQwqVVjqwPjCGCSMCMcHSHvvzHMzvcsrMc
pfjlQRpPRRLQWtmLNdWdmqqJ
CPTPPmbjmVjVGCvzbjjPrGsnnMpttdtGdncdMccDRd
lhlHzQSHwzhJLwgWgpMDMMsDdcDQMDMMns
BHZghLWwSFBJJBFvzmbfjNZvZmCvmb
PBGcvvcRwpwNcZcNPpPNcTHGdMtrCWrCCtCLWMtWgbVdMV
fmsJjnqmmfsjQJnjFzSFSqsqgWrtMttZgMWVMbbVMdbSrLtr
qQjjZFmfjZhZmwcvPhNpTNBTwN
HHlVVmmsbbqMsJmVzGSBMSrQQrRrGvvnDn
PZcphZPPZPhjcpdWgPZhRPfcDSrtDBSGNvtggrQtnvQNGNDn
dcWwFjpcPhRcCpjwdCPLzHblJbLbzmsmbTwzqH
hRfzTTfRrTGzhGWTrRrbfcQZQSttWtwddJtvdJJvWSHq
npjnDjFlpDnFFNMjljCnFMQtHHtqNHNQJwwZZqstNwJJ
DCjpLjjpVLDMDpVLDLQbbhzBhVrcVgVGQQcz
LncLBLjCSNrNrNpCLQBBBGwqQwzlzmggvqRqgllmzwtv
fMZPHhhHfthMdbRgHJzmVqlvwlwg
hfsPbZFPPDsfGLcBtSFNBSjL
MlZmszBMJBHrMBMbShwSFpbZSZfwwb
TCLCcPNGTgTPNGWtCtcWtPcSsRfRjRwjFbfpNFDjwsFspw
nVtqqsWsdHzJHqmM
RCrhSmWrmrvmrvhMvRNrRCzCJcQQbPtsMZVGJJtsZssPcQcZ
jLFBGqLFpqBLgZVbPbsLJQcbsV
HjDljGFwrRHRRTrS
GZZhnrwZBwNjRPRCbCbn
fJtJJpsVfpgNTbVNFTRP
JJcpLJfLdcWLdplwRdQMBvSqwRhvrG
wmZDPlRlCDwglgsHtsBvdBHLFLSddr
VbVMnMftfVjQWFFHdMBdBFMFHr
zfjtnGqqnjGqfjPcDPlZPlRDzccw
BRjhfhvRgnTMlFDDJfZzZFFQDZ
qLdqcNttwwcwwSPSpqLNmrwmrZsGzzDFZGZFzVssrzJGnsQG
wSNdHScScdmwHSpdNcmmtLMvChRHbvBMTBnCBBvhvlCh
JgWTPfFPgCPPlCntQSGghHvQnSdQ
BzvMZvLVQpdQpSZh
RwVVjRDVcRDNDTlJPqTv
SGHSrBBRPhPPHQcTccQTRRQjTN
vvWvspCbzWVWVrWdjj
wZpDzCDgDbCZJZzJGlrlqPqnqPllmH
FCncCrDWMLCbjMCcFpLdzZfmZzwwWzdzNRZdWB
sqsgTqHSqllNldMwlZzJ
MtHPTgQhvhhqcrDrrDpjLCQc
pPPvmPWSClqqPvqCmSwqmgGBWDjhGLHfjhDLJGjBBhNj
zrbdcdMndcRdTrsMcbTRdzRFVHjLjDjNLNHsfDhNGjhJNhDj
RdFFcnTdZcTrRRdFFbZtwQCPQglvPlwJwQPZSqqP
wlmbvwmvQvWQsvmbsSsQbswlRCNPfCTcTRVCffPtTSCPNRVP
FhJJJFgFqJGBtDpJhTTcVcVhdcCdCdTV
GDFtgLFnqqDGqGZsQvsllrjbLjbrvw
lnFSnJvmgvLlfnJpgnsjnjgfDQWqCJqZdDtDCtCtCdDrtDDQ
VTBBMPFcNNtMZDMW
VTGbzGGhTbTGHwVPvvFnfpvjgHnfjppp
JJwHqvlvDjljDwJFlZjZDwHNNsMqhNpphNpmNVzpsnsnRV
mTLgrLLcLSTTTdmPPfrrrnssNhRNWhgngzMWzgzVnM
SmTfdSBbBJbtjJvljl
bPNLwTCLLQQqtJsf
zdnnZVlWWGGRWGWdgdSStQMqJSMRptftbsMf
FWbvgvZZZZgnTmwrrhrFPCrP
HcGzzszFGllHWHbZspHbHGsHTwwrTrLLCNjSZwNjNjjCCNLj
PBJMJQJDDDnDggRhMdRSLmjTmTwwVjVQSvvwvC
RqfdhgDPDJDqJJnBdfzWWHcstslcbtStfHzl
zvRRlCqrdNdZcZpjBpVwjsmjsm
fgbTDqbhGfDnLDnLLqLhFmsHpTPHjHppppBwpwws
nhnnnDDngDtDbfSbDnGhhgRlNvQdQqNvQvtcQQNJRNJN
cZbCcbbScCbcmPGjPfSBQQSq
lnMnnVsMVvmzzGMDzPDf
LhrTsTTglrnsrrWWVvlwTnNtcpZRCmhtbCZFdttZbRCp
NWrFPZVWNVrvvrhtnNdddtpldmjm
DcBQBDsJbCwQnbtdzmjjjljbpjbz
qCDcGsDJGCcBDBcswJnBJQDfWfqgvZSvgZPfrVSWvPvZZZ
vcsdHdGtHtMHMFtVsddsWCcbppZwjScLpWhbjRWR
NTwrnzJrgTPrDwnlphRpjSpWbJJLLZWj
TlDPfPnzzlzTBzzvQFFBHMtVtqBqqw
NHnqqfZvZBNHHvgfrSlJrJCSllJRVrCn
TDTdhLMWjFcddMJPSSPJRmlCPz
bljWFdLLTDLtdFtLlwZvqfbgwwHfwqHNvw
BRRjhRQndRNVqBjRVhFLccjpwMmLmjHmgFHH
fZJfJvzPPWtWWlltZzZPpcgFMsFFwwFdpHdgwtdw
PCrdrzzfWCPdvSlqTqNSDnnQVVQQGT
DjbfBMDSfBljBsLSjSZbzrGtPtMCPtVPvvqrzqzG
mWdJWcppcNTdpppjzjRRVrPRpq
QncmnHwmdTmwQcmjNTfgfhlBShshhsffnfbB
WGDsMJsrjHCWtDMGDDVQqSvZqfSJzSnvnvvv
LgLFLFBFLVVzfBzMqZ
lgmFcwLhNcwdwwMLwhmcRDjNpCWRsWRspGGssHCp
PnPzNccnjFfvCvhbSBVcWqdhSVhV
psGMDQJDDDJgQNDHHJbwqwBsVqqZVWBBhBdd
DlDJDQGptpgpGDfTRnrTrFPnNTlf
MSSSMLLmFHcDScSq
ppZnCsbjPZpnnJcbRDmzHJqRRD
pmNmnGnQNnClZGMVMdBGrMgVWg
lsTTGcQzBcljCcQzGcGjGptttpmvSJtmggtwwswwtS
qZRnrhMbRVdhZRhhdnnVRPbmwSNwNNHtmJBvwpvtwNSvSb
VnMrqrrdqhZrnrBLLlzzlQjQjLfTcGfFDF
dJJTlHvhZqZlQTJnSgQDzgsSbScsSBzc
RRNtGjCCpRPPpRtjfrttRzmbscLsLZLgcsbmLzSGLB
wfNttfNrtWwPNNFfRtpfrdJMTTTZTMZTTVTlVwTlvM
PQTGLmdNTgPmGgNNdCPLQlrMqBrDzMCMFqDqFqjVCBCD
hhRwwvpSFmzDrmFh
vwwZfSfsmvtSspnZLLLdLGWPTGTQtTWG
pMcWzWFvWhFpPMWzvvhpdprHTZTQrHrQdZTJdfTgQTnJ
CGbjBbNjjDmRHJDgrTVVZg
NNttGlGqNLsbtlhMFMFcMLwMvvZz
CGSCBNCQBtBCQttBwCGtGtQrqrLrJqZHLHbqHvLDHLrq
nVVhPMfVdfVPbfqLLqgDDqPvgZsv
cpVncbfnhFcBltTplpmTBC
MrdcdStbMnddtRBdqMnFmbqGCwqCVHVsNHwPfGVPqsCsCs
DBLllzWWQQzlZVVVCsGWHfsH
JQphjTgBjlLgjjpTpLgvTjQnnnSJJRRFmdbRRSdMRtmdMc
QbRZMSWMblwLsgpwZzqZ
BFncBrfcdNrrnVrNjsFzFTJpJLGJsGqLTp
VjhDDBdrfdhQMllzHmPQMh
LdVVjFVFbpVGRQGllG
cNMcJNHzJWJtCWHNJHcHczWpGmmhMQmBBqrlRhBmpGpGBQ
JZzTTtCZtHCJnNnNwPfbFpnfdDdLdnvP
TpMlrWTTddjmlmDmgQgRtw
MNNVMSsVSNSnNVMFLDqwtGgRRtGbgFRwtR
CCLSCPSCZZHVCfZscBJJhPphpdpprdhjJM
gSMSHJHsMMpzRgHzsRMPPSzsPhtZtZdqdDqQDhdCdZmQldht
FCcCnrGcNTfvvtqqfvlflQ
TrTrWNWwrTJLMzJCzWLL
TpTzwMrfbrpFpMbFrrrzbPSdZmtSZRTlTZRlmdCVlCtJ
vqvWgqDJQJsQCVtZgdZdRRGd
vsvLJLchWBcqnvczwjLfzPjfrjzPrz
zqzbqCFZgmzzmNmf
vpRWSbRVbVWddVpwvwdRSwnSNgLHsnfNgMmgMLMmnrns
DwWVpJRlpdbpRDWdGJGcGlhFtPPCqCCBFqZPQttlqFBq
wQRlwtBJBDwttJdGvLfBvHLLfTLz
MMmNZcMrcMFnRHzfjjvvHfvc
FggpbFnhrNNrrMrMbMbnhQVJVhstJwqWCVCRsQJQ
DQbCGblQlpQFQlHjCbjwDQQMggNmJmgnnpRBngfZmNgJMf
zvhWccWVdWBchdssPrrWZZZfmsmmmgsnZZJRsRTf
zBdtqPccWPHFCqCCqljq
ttrbRMmgtHgfmHSfBpLfnBBZBppB
CVTJDCCNPwCPDwcqzmddQZdTQdnLBQThWp
zwFDjwDJJPzjzVNcVJwCcbRHGmbbMrFHgHvrsgbblG
gZjjwHqHCzrMZVVR
hhzcdTzPrVhVCGMb
fPcmLPNffsccJDdNDjBnpwzmHqgWjHwwvg
SJQFSvQBlzbSCgdPPddPPPSN
pcrjcWLwwcHcgPNgTPLMNTCB
pRsjsWRnrpHRmrBrHrjlbJFvvzQFnzQblQDDbJ
VjQVMQPVMfVPPbGPHHbGJD
pcqSttltsbDGddsCJG
TSchqLtTLFhgQbMMQMrr
trqzMRwNTtDzLPJQgWmjmjrf
lbBQdpZbsmhGmZhmmG
llVbpCplvvHBBHpnRDcDRRqnRRQnFRzT
SLSSFFmzLShsVSSHnLnrJdbnRdZZbrRw
qCfWBftpNWNNlqvTpwrRbGGCnwGmgRJGZn
NcTBNpvWvBWpMftNffpqWlTpmzPDQPSzFVMsFQVhHsjHszss
VtJtNBRBGDpdpNbC
QgLncnttvFcwwhLvFjSGsSbmmQCSDdpCmpdG
vLgjLhhrctMvLFFjLtMTLMgfPZqBZPZzJBBfWZZPRZZTRV
mJzDJJpJBvfsGMQnBM
CwPWCLRRWwRqwPqhPsrZrnrlhhQrMTrvZl
dCdLLSPRLSqWqVSLqLjgJDzDmtbngFVtJtzz
mtgWtMWrqjzQTTjghwwfczlNJdlcJnlc
FvRsDPPFGRBFvvslwDnTlcTTdwndlh
SGBZRBTsFGBRvLpvSCmgQWQjgggMrQjmmSmW
GcsRrQhrVVjhRcWlnDFGGmvntDWZ
TPbSgJJgBSCbCTbLHMCMTTZdFHvtZlWZDZFzmzZHZmmF
gBCMCSpbPMMPjcjqQQpqQprv
nZJcnZwvwzvTTTVtpDFnHH
DQPBqGGGdMdTRHRBpNgFNR
dCGPfhPWQdWWWCWShWPqrChWLLwLswjcvSJbvbLjJLbzJbJD
QrBQtdtrQBrdtFHPrdQBDvGhLGnPnCWnmpDmLpmD
NjlRJRlNzJJVbSSRVZwwJcmpWDGCWnbchnLCCmnWCG
llSJzsZzMMlsSZjSjZwJNQqtHHdBFsqdfTHhqFftQB
zdTJFHTdDBzrNdMnhNnNdM
ZlLZZcLtVtcWtGjtzLjLZjCrnVNrnRbrQQbQSRVrRnSNqS
lZtGtCvjZPCGCctPpsDDBzTHFmPmFszD
mQSMvdMQtQdZhQrPWCPqPQrN
RwjwnZGzJFTZgzggzJDDwJnCPPhNNqPrLhrGNcWcWNPqCq
ZTzDfnwFzTngTwJvfSlMtMMlmsHmHt
lZlmFRVZWmgQWhRsRpJsCJpJct
PTbPTGTGwwGrbdfjNNZJvcCsCZtvpTsh
bGdBBqGrdBPjDMzzVFZgqQzFFL
szvsmLvppPPtzGLGWpVdTSHTNgjHQRmHTgSH
FnBMBNZwZNcnDZMcnZlZgwgdQTTHjVJjHHVRQHJj
DnZrFCMZMNffrLPbLsfW
rJvmnBgnrCrGRSGNQR
hthjNfhwctwpjTLtVLjTGSpldSCGSPdlPSRzSqSz
TVcTfHNFcwtjMhTvgbHZsBbWmmZbnH
WsQgstQmvQJnssWsWPzhRzhBjZBSBRZSnj
qwCNqFwDrrlDrFPvRhTSPPzLRz
bppqwppCddlvfbDNVgmMmtMfVVmfmVWW`

// rucksackContentlist= `vJrwpWtwJgWrhcsFMMfFFhFp
// jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
// PmmdzqPrVvPwwTWBwg
// wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
// ttgJtRGJQctTZtZT
// CrZsJsPPZsGzwwsLwLmpwMDw`

//get each rucksack
let rucksackList = rucksackContentlist.split('\n')

//they have equal times so, split by 2
let prioritySum = 0
for(let rucksack of rucksackList) {
    let set = new Set()
    let rucksackLength = rucksack.length 
    let firstComparment = rucksack.slice(0, rucksackLength/2)
    let secondCompartment = rucksack.slice(rucksackLength/2, rucksackLength)
    for(let item of firstComparment) {
        set.add(item)
    }

    for(let item of secondCompartment) {
        if(set.has(item)) {
            if(item.charCodeAt(0) > 97) {
                prioritySum += item.charCodeAt(0) - 96
                break
            }
            prioritySum += item.charCodeAt(0) - 38
            break
        }
    }
}

// alert(`Priority sum is ${prioritySum}`)

// --- Part Two ---
// As you finish identifying the misplaced items, the Elves come to you with another issue.

// For safety, the Elves are divided into groups of three. Every Elf carries a badge that identifies their group. For efficiency, within each group of three Elves, the badge is the only item type carried by all three Elves. That is, if a group's badge is item type B, then all three Elves will have item type B somewhere in their rucksack, and at most two of the Elves will be carrying any other item type.

// The problem is that someone forgot to put this year's updated authenticity sticker on the badges. All of the badges need to be pulled out of the rucksacks so the new authenticity stickers can be attached.

// Additionally, nobody wrote down which item type corresponds to each group's badges. The only way to tell which item type is the right one is by finding the one item type that is common between all three Elves in each group.

// Every set of three lines in your list corresponds to a single group, but each group can have a different badge item type. So, in the above example, the first group's rucksacks are the first three lines:

// vJrwpWtwJgWrhcsFMMfFFhFp
// jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
// PmmdzqPrVvPwwTWBwg
// And the second group's rucksacks are the next three lines:

// wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
// ttgJtRGJQctTZtZT
// CrZsJsPPZsGzwwsLwLmpwMDw
// In the first group, the only item type that appears in all three rucksacks is lowercase r; this must be their badges. In the second group, their badge item type must be Z.

// Priorities for these items must still be found to organize the sticker attachment efforts: here, they are 18 (r) for the first group and 52 (Z) for the second group. The sum of these is 70.

// Find the item type that corresponds to the badges of each three-Elf group. What is the sum of the priorities of those item types?
prioritySum = 0
for(let i = 0; i< rucksackList.length ; i= i+3) {
    let firstElf = rucksackList[i]
    let secondElf = rucksackList[i+1]
    let thirdElf = rucksackList[i +2]

    let itemSet = new Set()

    for(let item of firstElf) {
        itemSet.add(item)
    }
    let filteredItemSet = new Set()

    for(let item of secondElf) {
        if(itemSet.has(item)) {
            filteredItemSet.add(item)
        }
    }

    for(let item of thirdElf) {
        if(filteredItemSet.has(item)) {
            if(item.charCodeAt(0) > 97) {
                prioritySum += item.charCodeAt(0) - 96
                break
            }
            prioritySum += item.charCodeAt(0) - 38
            break
        }
    }

}

alert(`Priority sum is ${prioritySum}`)
