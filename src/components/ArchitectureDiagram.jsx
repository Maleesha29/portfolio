import React from 'react';

export const ArchitectureDiagram = ({ type }) => {
  switch (type) {
    case 'gitops':
      return (
        <div className="w-full overflow-x-auto p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 font-mono text-xs">
          <div className="min-w-[620px] flex items-center justify-between gap-2">
            {/* Step 1 */}
            <div className="flex-1 p-3 rounded-lg bg-slate-900 border border-cyan-500/30 text-center">
              <div className="text-[10px] text-cyan-400 uppercase tracking-wider mb-1">Developer</div>
              <div className="font-bold text-white text-xs">Git Push</div>
              <div className="text-[10px] text-slate-400 mt-1">Feature Branch</div>
            </div>

            <div className="text-cyan-400 font-bold">➔</div>

            {/* Step 2 */}
            <div className="flex-1 p-3 rounded-lg bg-slate-900 border border-cyan-500/30 text-center">
              <div className="text-[10px] text-cyan-400 uppercase tracking-wider mb-1">CI Automation</div>
              <div className="font-bold text-white text-xs">Jenkins CI</div>
              <div className="text-[10px] text-slate-400 mt-1">Maven + SonarQube</div>
            </div>

            <div className="text-cyan-400 font-bold">➔</div>

            {/* Step 3 */}
            <div className="flex-1 p-3 rounded-lg bg-slate-900 border border-cyan-500/30 text-center">
              <div className="text-[10px] text-cyan-400 uppercase tracking-wider mb-1">Image Registry</div>
              <div className="font-bold text-white text-xs">Docker Hub</div>
              <div className="text-[10px] text-slate-400 mt-1">Immutable Tags</div>
            </div>

            <div className="text-violet-400 font-bold">➔</div>

            {/* Step 4 */}
            <div className="flex-1 p-3 rounded-lg bg-slate-900 border border-violet-500/40 text-center">
              <div className="text-[10px] text-violet-400 uppercase tracking-wider mb-1">GitOps Engine</div>
              <div className="font-bold text-white text-xs">Argo CD</div>
              <div className="text-[10px] text-slate-400 mt-1">Self-Healing Sync</div>
            </div>

            <div className="text-violet-400 font-bold">➔</div>

            {/* Step 5 */}
            <div className="flex-1 p-3 rounded-lg bg-slate-900 border border-violet-500/40 text-center">
              <div className="text-[10px] text-violet-400 uppercase tracking-wider mb-1">Cluster Runtime</div>
              <div className="font-bold text-white text-xs">Kubernetes</div>
              <div className="text-[10px] text-slate-400 mt-1">Rolling Replicas</div>
            </div>
          </div>
        </div>
      );

    case 'terraform':
      return (
        <div className="w-full overflow-x-auto p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 font-mono text-xs">
          <div className="min-w-[620px] flex items-center justify-between gap-2">
            <div className="flex-1 p-3 rounded-lg bg-slate-900 border border-cyan-500/30 text-center">
              <div className="text-[10px] text-cyan-400 uppercase tracking-wider mb-1">IaC Code</div>
              <div className="font-bold text-white text-xs">Terraform HCL</div>
              <div className="text-[10px] text-slate-400 mt-1">Modular Specs</div>
            </div>

            <div className="text-cyan-400 font-bold">➔</div>

            <div className="flex-1 p-3 rounded-lg bg-slate-900 border border-cyan-500/30 text-center">
              <div className="text-[10px] text-cyan-400 uppercase tracking-wider mb-1">Network Perimeter</div>
              <div className="font-bold text-white text-xs">AWS VPC</div>
              <div className="text-[10px] text-slate-400 mt-1">Dual Public Subnets</div>
            </div>

            <div className="text-cyan-400 font-bold">➔</div>

            <div className="flex-1 p-3 rounded-lg bg-slate-900 border border-cyan-500/30 text-center">
              <div className="text-[10px] text-cyan-400 uppercase tracking-wider mb-1">Traffic Routing</div>
              <div className="font-bold text-white text-xs">AWS ALB</div>
              <div className="text-[10px] text-slate-400 mt-1">Health Probes</div>
            </div>

            <div className="text-violet-400 font-bold">➔</div>

            <div className="flex-1 p-3 rounded-lg bg-slate-900 border border-violet-500/40 text-center">
              <div className="text-[10px] text-violet-400 uppercase tracking-wider mb-1">Compute Tier</div>
              <div className="font-bold text-white text-xs">EC2 Instances</div>
              <div className="text-[10px] text-slate-400 mt-1">User-Data Apache</div>
            </div>

            <div className="text-violet-400 font-bold">➔</div>

            <div className="flex-1 p-3 rounded-lg bg-slate-900 border border-violet-500/40 text-center">
              <div className="text-[10px] text-violet-400 uppercase tracking-wider mb-1">State & Storage</div>
              <div className="font-bold text-white text-xs">Amazon S3</div>
              <div className="text-[10px] text-slate-400 mt-1">Remote Locking</div>
            </div>
          </div>
        </div>
      );

    case 'eks':
      return (
        <div className="w-full overflow-x-auto p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 font-mono text-xs">
          <div className="min-w-[620px] flex items-center justify-between gap-2">
            <div className="flex-1 p-3 rounded-lg bg-slate-900 border border-cyan-500/30 text-center">
              <div className="text-[10px] text-cyan-400 uppercase tracking-wider mb-1">External Ingress</div>
              <div className="font-bold text-white text-xs">Route 53 / ALB</div>
              <div className="text-[10px] text-slate-400 mt-1">SSL Termination</div>
            </div>

            <div className="text-cyan-400 font-bold">➔</div>

            <div className="flex-1 p-3 rounded-lg bg-slate-900 border border-cyan-500/30 text-center">
              <div className="text-[10px] text-cyan-400 uppercase tracking-wider mb-1">K8s Controller</div>
              <div className="font-bold text-white text-xs">AWS LB Controller</div>
              <div className="text-[10px] text-slate-400 mt-1">Helm Managed</div>
            </div>

            <div className="text-cyan-400 font-bold">➔</div>

            <div className="flex-1 p-3 rounded-lg bg-slate-900 border border-cyan-500/30 text-center">
              <div className="text-[10px] text-cyan-400 uppercase tracking-wider mb-1">IAM Auth</div>
              <div className="font-bold text-white text-xs">IRSA + OIDC</div>
              <div className="text-[10px] text-slate-400 mt-1">Least Privilege</div>
            </div>

            <div className="text-violet-400 font-bold">➔</div>

            <div className="flex-1 p-3 rounded-lg bg-slate-900 border border-violet-500/40 text-center">
              <div className="text-[10px] text-violet-400 uppercase tracking-wider mb-1">Direct Target</div>
              <div className="font-bold text-white text-xs">Pod IP Ingress</div>
              <div className="text-[10px] text-slate-400 mt-1">Zero NodePort Hop</div>
            </div>

            <div className="text-violet-400 font-bold">➔</div>

            <div className="flex-1 p-3 rounded-lg bg-slate-900 border border-violet-500/40 text-center">
              <div className="text-[10px] text-violet-400 uppercase tracking-wider mb-1">Serverless Compute</div>
              <div className="font-bold text-white text-xs">EKS Fargate</div>
              <div className="text-[10px] text-slate-400 mt-1">MicroVM Isolation</div>
            </div>
          </div>
        </div>
      );

    case 'ec2':
      return (
        <div className="w-full overflow-x-auto p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 font-mono text-xs">
          <div className="min-w-[560px] flex items-center justify-between gap-2">
            <div className="flex-1 p-3 rounded-lg bg-slate-900 border border-cyan-500/30 text-center">
              <div className="text-[10px] text-cyan-400 uppercase tracking-wider mb-1">Client Traffic</div>
              <div className="font-bold text-white text-xs">Browser HTTPS</div>
              <div className="text-[10px] text-slate-400 mt-1">TCP Port 3000</div>
            </div>

            <div className="text-cyan-400 font-bold">➔</div>

            <div className="flex-1 p-3 rounded-lg bg-slate-900 border border-cyan-500/30 text-center">
              <div className="text-[10px] text-cyan-400 uppercase tracking-wider mb-1">Security Firewall</div>
              <div className="font-bold text-white text-xs">AWS Security Group</div>
              <div className="text-[10px] text-slate-400 mt-1">Port 3000 & 22 only</div>
            </div>

            <div className="text-cyan-400 font-bold">➔</div>

            <div className="flex-1 p-3 rounded-lg bg-slate-900 border border-cyan-500/30 text-center">
              <div className="text-[10px] text-cyan-400 uppercase tracking-wider mb-1">Container Runtime</div>
              <div className="font-bold text-white text-xs">Alpine Docker</div>
              <div className="text-[10px] text-slate-400 mt-1">node:18-alpine</div>
            </div>

            <div className="text-violet-400 font-bold">➔</div>

            <div className="flex-1 p-3 rounded-lg bg-slate-900 border border-violet-500/40 text-center">
              <div className="text-[10px] text-violet-400 uppercase tracking-wider mb-1">Application API</div>
              <div className="font-bold text-white text-xs">Express Server</div>
              <div className="text-[10px] text-slate-400 mt-1">Stripe Checkout API</div>
            </div>
          </div>
        </div>
      );

    case 'microservices':
    default:
      return (
        <div className="w-full overflow-x-auto p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 font-mono text-xs">
          <div className="min-w-[600px] flex items-center justify-between gap-2">
            <div className="flex-1 p-3 rounded-lg bg-slate-900 border border-cyan-500/30 text-center">
              <div className="text-[10px] text-cyan-400 uppercase tracking-wider mb-1">Frontend Tier</div>
              <div className="font-bold text-white text-xs">React 19 Client</div>
              <div className="text-[10px] text-slate-400 mt-1">Port 3000</div>
            </div>

            <div className="text-cyan-400 font-bold">➔</div>

            <div className="flex-1 p-3 rounded-lg bg-slate-900 border border-cyan-500/30 text-center">
              <div className="text-[10px] text-cyan-400 uppercase tracking-wider mb-1">Private Mesh</div>
              <div className="font-bold text-white text-xs">Docker Bridge</div>
              <div className="text-[10px] text-slate-400 mt-1">Internal DNS Resolution</div>
            </div>

            <div className="text-cyan-400 font-bold">➔</div>

            <div className="flex-1 p-3 rounded-lg bg-slate-900 border border-cyan-500/30 text-center">
              <div className="text-[10px] text-cyan-400 uppercase tracking-wider mb-1">Backend API</div>
              <div className="font-bold text-white text-xs">Node / Express</div>
              <div className="text-[10px] text-slate-400 mt-1">REST API Gateway</div>
            </div>

            <div className="text-violet-400 font-bold">➔</div>

            <div className="flex-1 p-3 rounded-lg bg-slate-900 border border-violet-500/40 text-center">
              <div className="text-[10px] text-violet-400 uppercase tracking-wider mb-1">ML Inference</div>
              <div className="font-bold text-white text-xs">Flask ML Service</div>
              <div className="text-[10px] text-slate-400 mt-1">NLP Classification</div>
            </div>

            <div className="text-violet-400 font-bold">➔</div>

            <div className="flex-1 p-3 rounded-lg bg-slate-900 border border-violet-500/40 text-center">
              <div className="text-[10px] text-violet-400 uppercase tracking-wider mb-1">Persistence</div>
              <div className="font-bold text-white text-xs">MongoDB</div>
              <div className="text-[10px] text-slate-400 mt-1">Named Storage Volumes</div>
            </div>
          </div>
        </div>
      );
  }
};
